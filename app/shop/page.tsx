import Filter from "@/components/Filter";
import SectionTop from "@/components/SectionTop";
import Listing from "@/components/Listing";
import Specialty from "@/components/Specialty";
import Next from "@/components/Next";

export default function Shop() {
  const items = [
    {
      image: "/Products/trenton-modular-sofa.png",
      name: "Trenton modular sofa_3",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/granite-dining-table-with-dining-chair.png",
      name: "Granite dining table with dining chair",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/outdoor-bar-table-and-stool.png",
      name: "Outdoor bar table and stool",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/plain-console-with-teek-mirror.png",
      name: "Plain console with teek mirror",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/pic-1.png",
      name: "Grain coffee table",
      price: "Rs 15,000.00",
    },
    {
      image: "/Products/pic-2.png",
      name: "Kent coffee table",
      price: "Rs 225,000.00",
    },
    {
      image: "/Products/pic-3.png",
      name: "Round coffee table_color 2",
      price: "Rs 251,000.00",
    },
    {
      image: "/Products/pic-4.png",
      name: "Reclaimed teak coffee table",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/pic-5.png",
      name: "Plain console_",
      price: "Rs 258,000.00",
    },
    {
      image: "/Products/pic-6.png",
      name: "Reclaimed teak Sideboard",
      price: "Rs 20,000.00",
    },
    {
      image: "/Products/pic-7.png",
      name: "SJP_0825 ",
      price: "Rs 200,000.00",
    },
    {
      image: "/Products/pic-8.png",
      name: "Bella chair and table",
      price: "Rs 100,000.00",
    },
    {
      image: "/Products/pic-9.png",
      name: "Granite square side table",
      price: "Rs 258,000.00",
    },
    {
      image: "/Products/pic-10.png",
      name: "Asgaard sofa",
      price: "Rs 250,000.00",
    },
    {
      image: "/Products/pic-11.png",
      name: "Maya sofa three seater",
      price: "Rs 115,000.00",
    },
    {
      image: "/Products/pic-12.png",
      name: "Outdoor sofa set",
      price: "Rs 144,000.00",
    },
  ];
  return (
    <div>
      <SectionTop route="Shop" />
      <div className="py-6" />
      <Filter />
      <div className="px-24">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <Listing key={item.image} {...item} />
          ))}
        </div>
        <Next />
      </div>
      <Specialty />
    </div>
  );
}
