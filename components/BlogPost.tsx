import Image from "next/image";
import UnderlinedButton from "./UnderlinedButton";

interface BlogPostProps {
  image: string;
  title: string;
  type: string;
}

export default function BlogPost({ image, title, type }: BlogPostProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <Image src={image} width={817} height={500} alt={title} />
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/prf.svg" width={24} height={24} alt="" />
          <p className="text-[#9F9F9F]">Admin</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/cal.svg" width={24} height={24} alt="" />
          <p className="text-[#9F9F9F]">14 Oct 2022</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/lab.svg" width={24} height={24} alt="" />
          <p className="text-[#9F9F9F]">{type}</p>
        </div>
      </div>
      <p className="w-[817px] text-[#9F9F9F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet.
      </p>
      <UnderlinedButton>Read More</UnderlinedButton>
    </div>
  );
}
