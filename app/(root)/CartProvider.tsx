"use client";
import { createContext, useState, useContext } from "react";

export interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  category: string;
  id: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  incrementQuantity: (item: CartItem) => void;
  decrementQuantity: (item: CartItem) => void;
}

const CartContext = createContext<CartState | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.product.price * item.quantity);
  };

  const removeFromCart = (item: CartItem) => {
    const updatedCartItems = cartItems.filter(
      (i) => i.product.id !== item.product.id,
    );
    setCartItems(updatedCartItems);
    setTotal(total - item.product.price * item.quantity);
  };

  const incrementQuantity = (item: CartItem) => {
    const index = cartItems.indexOf(item);
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    setCartItems(updatedCartItems);
    setTotal(total - updatedCartItems[index].product.price);
  };

  const decrementQuantity = (item: CartItem) => {
    const index = cartItems.indexOf(item);
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    setTotal(total + updatedCartItems[index].product.price);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
