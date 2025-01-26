import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";
import { client } from "@/sanity/lib/client";
import { productType } from "@/lib/types";
import ProductGrid from "@/components/ProductGrid";

export default async function Shop() {
  const products: productType[] = await client.fetch(`*[_type == 'product']{
    _id,
    imagePath,
    name,
    price
  }`);

  return (
    <div>
      <SectionTop route="Shop" />

      <div className="py-6" />

      <ProductGrid products={products} />
      <Specialty />
    </div>
  );
}
