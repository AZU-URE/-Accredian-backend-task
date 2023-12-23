import Image from "next/image";
export default function Footer() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.06)] p-10 space-y-3">
      <div className="flex items-center space-x-2">
        <Image src={"/logo.svg"} height={32} width={32} alt="logo" />
        <p className="text-white font-michroma">0xArchitect</p>
      </div>
      <p>All rights reserved</p>
      <div className="flex items-center space-x-3">
        <Image src={"/twitter.svg"} height={24} width={24} alt="logo" />
        <Image src={"/discord.svg"} height={24} width={24} alt="logo" />
        <Image src={"/telegram.svg"} height={24} width={24} alt="logo" />
      </div>
    </section>
  );
}
