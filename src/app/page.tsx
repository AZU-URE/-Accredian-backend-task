import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#182246] to-[#1b1330] w-full min-h-screen space-y-20 flex flex-col text-white">
      <Navbar />
      <Hero />
      <Service />
    </main>
  );
}
