import SectionTop from "@/components/SectionTop";
import Image from "next/image";
import Specialty from "@/components/Specialty";
import Next from "@/components/Next";
import UnderlinedButton from "@/components/UnderlinedButton";

export default function About() {
  const blogs = [
    {
      image: "/blog-lg-1.png",
      title: "Going all-in with millennial design",
      type: "Wood",
    },
    {
      image: "/blog-lg-2.png",
      title: "Going all-in with millennial design",
      type: "Handmade",
    },
    {
      image: "/blog-lg-3.png",
      title: "Going all-in with millennial design",
      type: "Wood",
    },
  ];
  const smallBlogs = [
    {
      image: "/blog-sm-1.png",
      title: "Going all-in with millennial design",
    },
    {
      image: "/blog-sm-2.png",
      title: "Exploring new ways of decorating",
    },
    {
      image: "/blog-sm-3.png",
      title: "Handmade pieces that took time to make",
    },
    {
      image: "/blog-sm-4.png",
      title: "Modern home in Milan",
    },
    {
      image: "/blog-sm-5.png",
      title: "Colorful office redesign",
    },
  ];
  return (
    <div>
      <SectionTop route="Blog" />
      <div className="flex items-start justify-center p-[100px]">
        <div className="flex flex-shrink flex-col gap-[54px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-4"
            >
              <Image src={blog.image} width={817} height={500} alt="" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image src={"/prf.svg"} width={24} height={24} alt="" />
                  <p className="text-[#9F9F9F]">Admin</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={"/cal.svg"} width={24} height={24} alt="" />
                  <p className="text-[#9F9F9F]">14 Oct 2022</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={"/lab.svg"} width={24} height={24} alt="" />
                  <p className="text-[#9F9F9F]">{blog.type}</p>
                </div>
              </div>
              <p className="w-[817px] text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <UnderlinedButton>Read More</UnderlinedButton>
            </div>
          ))}
        </div>
        <div className="flex-grow px-[41px] py-[22px]">
          <div className="flex w-full items-center rounded-[10px] border border-black p-2">
            <input
              type="text"
              className="w-full px-4 py-2 focus:outline-none"
            />
            <div className="flex items-center justify-center p-2">
              <Image src={"/search.svg"} width={24} height={24} alt="" />
            </div>
          </div>
          <div className="px-[43px] pt-[36px]">
            <p className="pb-[33px] text-2xl font-medium">Categories</p>
            <div className="flex justify-between pb-[33px] text-[#9F9F9F]">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="flex justify-between pb-[33px] text-[#9F9F9F]">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="flex justify-between pb-[33px] text-[#9F9F9F]">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="flex justify-between pb-[33px] text-[#9F9F9F]">
              <p>Interior</p>
              <p>1</p>
            </div>
            <div className="flex justify-between pb-[33px] text-[#9F9F9F]">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>
          <div className="px-[43px]">
            <p className="pb-[33px] text-2xl font-medium">Recent Posts</p>
            <div className="flex flex-col justify-between gap-[33px]">
              {smallBlogs.map((blog, index) => (
                <div key={index} className="flex gap-4">
                  <Image src={blog.image} width={80} height={80} alt="" />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">{blog.title}</p>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Next />
      <Specialty />
    </div>
  );
}
