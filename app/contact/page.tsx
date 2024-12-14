import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <SectionTop route="Contact" />
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="pt-[90px] text-4xl font-semibold">
            Get In Touch With Us
          </p>
          <p className="w-[644px] pb-[133px] text-center text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex items-start justify-center gap-[30px] px-[191px]">
          <div className="flex flex-col gap-10 px-20 py-10">
            <div className="flex items-start justify-center gap-4">
              <Image src={"/lloca.svg"} width={28} height={28} alt="" />
              <div>
                <p className="text-2xl font-semibold">Address</p>
                <p className="w-[212px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <Image src={"/phone.svg"} width={28} height={28} alt="" />
              <div>
                <p className="text-2xl font-semibold">Phone</p>
                <p className="w-[212px]">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <Image src={"/clock.svg"} width={28} height={28} alt="" />
              <div>
                <p className="text-2xl font-semibold">Working Time</p>
                <p className="w-[212px]">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grou w-1/2 px-[109px] py-[35px]">
            <p className="pb-6 font-medium">Your Name</p>
            <input
              className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
              type="text"
              placeholder="Abc"
            />
            <p className="pb-6 pt-9 font-medium">Email Address</p>
            <input
              className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
              type="text"
              placeholder="Abc@def.com"
            />
            <p className="pb-6 pt-9 font-medium">Subject</p>
            <input
              className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
              type="text"
              placeholder="This is an optional"
            />
            <p className="pb-6 pt-9 font-medium">Message</p>
            <input
              className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
              type="text"
              placeholder="Hi! I'd like to ask about"
            />
            <button className="mt-9 rounded-[10px] border border-black p-4">Submit</button>
          </div>
        </div>
      </div>
      <Specialty />
    </div>
  );
}
