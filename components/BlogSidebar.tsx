import Image from "next/image";

interface RecentPost {
  image: string;
  title: string;
}

interface BlogSidebarProps {
  recentPosts: RecentPost[];
}

export default function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  return (
    <div className="flex-grow px-[41px] py-[22px]">
      <div className="flex w-full items-center rounded-[10px] border border-black p-2">
        <input type="text" className="w-full px-4 py-2 focus:outline-none" />
        <div className="flex items-center justify-center p-2">
          <Image src="/search.svg" width={24} height={24} alt="" />
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
          {recentPosts.map((post, index) => (
            <div key={index} className="flex gap-4">
              <Image src={post.image} width={80} height={80} alt={post.title} />
              <div className="flex flex-col gap-2">
                <p className="text-sm">{post.title}</p>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
