import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full">
      <div className="font-michroma flex items-center justify-center relative">
        <Image
          src={"/hero/mesh.svg"}
          height={600}
          width={1200}
          className="absolute"
          alt="mesh"
        ></Image>
        <div className="flex flex-col items-center justify-center w-fit relative sm:p-28 p-16">
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
            className="absolute sm:left-8
             sm:top-0 -top-10 left-1"
          ></Image>
          <Image
            src={"/hero/console.svg"}
            height={80}
            width={80}
            alt="console_icon"
            className="absolute sm:right-6 sm:top-10 top-0 right-2"
          ></Image>
          <Image
            src={"/hero/code.svg"}
            height={80}
            width={80}
            alt="code_icon"
            className="absolute sm:bottom-0 sm:left-28 -bottom-8 left-12"
          ></Image>
          <Image
            src={"/hero/pen.svg"}
            height={80}
            width={80}
            alt="pen_icon"
            className="absolute sm:bottom-0 sm:right-24 -bottom-8 right-10"
          ></Image>
          <p className="md:text-5xl text-xl sm:text-3xl mb-5">Architecting</p>
          <p className="md:text-5xl text-xl sm:text-3xl mb-5">
            Decentralized Dreams
          </p>
          <p className="md:text-lg sm:text-sm text-xs font-questrial">
            Crafting Web3 Experiences Beyond Imagination
          </p>
          <button className="sm:p-3 md:text-lg sm:px-8 sm:text-sm mt-5 text-xs font-questrial p-1 px-2 rounded-md bg-btnBlue">
            Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
