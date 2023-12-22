import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full">
      <div className="font-michroma flex items-center justify-center">
        <Image src={"/hero/mesh.svg"} fill={true} alt="mesh"></Image>
        <div className="flex flex-col items-center justify-center w-fit relative p-28">
          {/* <Image
            src={"/hero/abstract-bg.png"}
            alt="abstract"
            height={100}
            width={100}
          ></Image> */}
          <Image
            src={"/hero/pic.svg"}
            height={80}
            width={80}
            alt="blockchain_icon"
            className="absolute left-8
             top-0"
          ></Image>
          <Image
            src={"/hero/console.svg"}
            height={80}
            width={80}
            alt="console_icon"
            className="absolute right-6 top-10"
          ></Image>
          <Image
            src={"/hero/code.svg"}
            height={80}
            width={80}
            alt="code_icon"
            className="absolute bottom-0 left-28"
          ></Image>
          <Image
            src={"/hero/pen.svg"}
            height={80}
            width={80}
            alt="pen_icon"
            className="absolute bottom-0 right-24"
          ></Image>
          <p className="text-6xl mb-5">Architecting</p>
          <p className="text-6xl mb-5">Decentralized Dreams</p>
          <p className="font-questrial">
            Crafting Web3 Experiences Beyond Imagination
          </p>
        </div>
      </div>
    </section>
  );
}
