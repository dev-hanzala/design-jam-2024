import React from "react";
import UnderlinedButton from "./UnderlinedButton";
import Image from "next/image";

const FeaturedBlogs = () => {
  const blogs = [
    {
      image: "/FeaturedBlogs/blog-1.png",
      title: "Going all-in with millennial design",
      duration: "5 min",
      date: "12th Oct 2022",
    },
    {
      image: "/FeaturedBlogs/blog-2.png",
      title: "Going all-in with millennial design",
      duration: "5 min",
      date: "12th Oct 2022",
    },
    {
      image: "/FeaturedBlogs/blog-3.png",
      title: "Going all-in with millennial design",
      duration: "5 min",
      date: "12th Oct 2022",
    },
  ];
  return (
    <div className="mb-[54px] flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-4xl font-medium">Our Blogs</p>
        <p className="font-medium">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[75px]">
        <div className="flex items-center justify-between gap-8">
          {blogs.map((blog) => (
            <div
              className="flex w-1/3 flex-col items-center justify-center gap-8"
              key={blog.image}
            >
              <Image src={blog.image} width={393} height={393} alt="" />
              <p className="text-center text-xl">{blog.title}</p>
              <UnderlinedButton>Read More</UnderlinedButton>
              <div className="flex items-center justify-center gap-5">
                <div className="flex gap-2">
                  <Image
                    src={"/FeaturedBlogs/time.svg"}
                    width={18}
                    height={18}
                    alt=""
                  />
                  <p className="font-light">{blog.duration}</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/FeaturedBlogs/date.svg"}
                    width={22}
                    height={22}
                    alt=""
                  />
                  <p className="font-light">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <UnderlinedButton>Find All Post</UnderlinedButton>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
