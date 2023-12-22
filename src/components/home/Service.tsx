import ServiceCard from "./ServiceCard";
import Image from "next/image";
export default function Service() {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-4xl font-michroma mb-4">Services</p>
        <p className="font-questrial text-center sm:text-base text-xs mb-6 ">
          Discover out comprehensive suite of services, meticulously crafted
          <br /> to elevate your business through innovate solutions
        </p>
        <div className="border-t-[1px] border-b-[1px] border-t-white border-b-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-parent w-full pl-10 pr-10 mb-24">
          <ServiceCard line1={"NFT & Raffle"} line2={"Marketplace"} />
          <ServiceCard line1={"NFT"} line2={"Drops"} />
          <ServiceCard line1={"Conventional"} line2={"Staking Platforms"} />
          <ServiceCard line1={"Lending & Borrowing"} line2={"Platforms"} />
          <ServiceCard line1={"Perpetual"} line2={"Dex"} />
          <ServiceCard line1={"Crypto"} line2={"Dex"} />
          <ServiceCard line1={"Multichain"} line2={"Solutions"} />
          <ServiceCard line1={"Smart Contract"} line2={"Audits"} />
          <ServiceCard line1={"Prompt Engineering"} line2={"Services"} />
        </div>
        <div className="p-10 bg-gradient-to-r from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.06)] w-full text-center flex flex-col justify-center items-center">
          <p className="font-michroma md:text-4xl mb-6">
            Join us in Shaping the Future
          </p>
          <button className="sm:p-3 sm:px-8 p-1 px-2 rounded-md">
            <Image
              src={"/services/customQuotes.svg"}
              alt="customQuotes"
              height={60}
              width={280}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
