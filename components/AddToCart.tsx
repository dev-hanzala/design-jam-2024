"use client";
import React, { useState } from "react";
import { productType } from "@/lib/types";
import { useCart, CartItem } from "./CartProvider";

export function AddToCart({ product }: { product: productType }) {
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartProduct: CartItem = {
      product: product,
      quantity: quantity,
    };
    addToCart(cartProduct);
    setQuantity(1);
  };

  console.log(cartItems);
  return (
    <div className="flex gap-4 py-8">
      <div className="flex items-center justify-center gap-4 rounded-[15px] border border-black px-12 py-4">
        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
          -
        </button>
        <p>{quantity}</p>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button
        onClick={handleAddToCart}
        className="rounded-[15px] border border-black px-12 py-4"
      >
        Add To Cart
      </button>
    </div>
  );
}
