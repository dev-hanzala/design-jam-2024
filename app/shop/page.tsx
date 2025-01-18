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

  const items = products.map((product) => ({
    id: product._id,
    image: product.imagePath,
    name: product.name,
    price: product.price,
  }));

  return (
    <div>
      <SectionTop route="Shop" />
      <div className="py-6" />
      <Filter />
      <div className="px-24">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <Listing key={item.id} {...item} />
          ))}
        </div>
        <Next />
      </div>
      <Specialty />
    </div>
  );
}
