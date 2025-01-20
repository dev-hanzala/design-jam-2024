import SectionTop from "@/components/SectionTop";
import Next from "@/components/Next";
import Specialty from "@/components/Specialty";
import BlogPost from "@/components/BlogPost";
import BlogSidebar from "@/components/BlogSidebar";

export default function Blog() {
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
      <div className="flex items-start justify-center p-24">
        <div className="flex w-full flex-grow flex-col items-center gap-[54px]">
          {blogs.map((blog, index) => (
            <BlogPost key={index} {...blog} />
          ))}
        </div>
        <BlogSidebar recentPosts={smallBlogs} />
      </div>
      <Next />
      <Specialty />
    </div>
  );
}
