import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
export default function Home() {
  return (
    <main className="bg-primary w-full min-h-screen space-y-9 flex flex-col text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
