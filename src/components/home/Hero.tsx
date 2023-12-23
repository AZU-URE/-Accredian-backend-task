import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full">
      <div className=" flex items-center justify-center relative">
        <Image
          src={"/hero/mesh.svg"}
          height={600}
          width={1200}
          className="absolute"
          alt="mesh"
        ></Image>
        <div className="flex flex-col items-center justify-center w-fit relative sm:p-24 p-10">
          <Image
            src={"/hero/abstract-bg.svg"}
            alt="abstract"
            height={600}
            width={600}
            className="absolute mix-blend-plus-lighter"
          ></Image>
          <Image
            src={"/hero/pic.svg"}
            height={80}
            width={80}
            alt="blockchain_icon"
            className="absolute sm:left-8
             sm:top-0 -top-20 left-1"
          ></Image>
          <Image
            src={"/hero/console.svg"}
            height={80}
            width={80}
            alt="console_icon"
            className="absolute sm:right-6 sm:top-10 -top-10 right-2"
          ></Image>
          <Image
            src={"/hero/code.svg"}
            height={80}
            width={80}
            alt="code_icon"
            className="absolute sm:bottom-0 sm:left-28 -bottom-11 left-12"
          ></Image>
          <Image
            src={"/hero/pen.svg"}
            alt="pen_icon"
            height={80}
            width={80}
            className="absolute sm:bottom-0 sm:right-24 -bottom-11 right-10 "
          ></Image>
          <p className="md:text-5xl xl:text-6xl text-xl mb-5 font-michroma">
            Architecting
          </p>
          <p className="md:text-5xl xl:text-6xl text-xl mb-5 font-michroma">
            Decentralized Dreams
          </p>
          <p className="md:text-lg sm:text-sm text-xs font-questrial">
            Crafting Web3 Experiences Beyond Imagination
          </p>
          <button className="sm:p-2 sm:px-8 p-1 px-5 md:text-lg sm:text-sm mt-5 text-xs font-questrial rounded-md bg-btnBlue">
            Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
