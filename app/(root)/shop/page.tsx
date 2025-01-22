import Filter from "@/components/Filter";
import SectionTop from "@/components/SectionTop";
import Listing from "@/components/Listing";
import Specialty from "@/components/Specialty";
import Next from "@/components/Next";
import { client } from "@/sanity/lib/client";

type Item = {
  _id: string;
  imagePath: string;
  name: string;
  price: string;
};

export default async function Shop() {
  const products: Item[] = await client.fetch(`*[_type == 'product']{
    _id,
    imagePath,
    name,
    price
  }`);

  return (
    <div>
      <SectionTop route="Shop" />
      <div className="py-6" />
      <Filter />
      <div className="px-24">
        <div className="container mx-auto grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Listing
              key={product._id}
              image={product.imagePath}
              _id={product._id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <Next />
      </div>
      <Specialty />
    </div>
  );
}
