import Image from "next/image";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Project from "@/components/home/Project";
import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#182246] to-[#1b1330] w-full min-h-screen space-y-24 flex flex-col text-white overflow-hidden">
      <Navbar title={"Connect"} />
      <Hero />
      <Service />
      <Project />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
