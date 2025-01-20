// DetailsServer.tsx
"use server";
import { client } from "@/sanity/lib/client";
import { Product } from "./CartProvider";

export async function getProduct(id: string): Promise<Product> {
  const product: Product = await client.fetch(`*[_id == "${id}"]`);
  return product;
}
