"use client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
interface btnTitle {
  title: string;
}
export default function Navbar(data: btnTitle) {
  const [visible, setVisible] = useState(false);
  const onClickHamburger = () => {
    console.log(visible);
    setVisible((value) => !value);
  };
  return (
    <nav className="flex justify-between items-center mb-10 backdrop-blur-3xl bg-white bg-opacity-5 p-5 px-10 w-full">
      <div className="flex items-center space-x-2">
        <Image src={"/logo.svg"} height={32} width={32} alt="logo" />
        <p className="text-white font-michroma">0xArchitect</p>
      </div>
      <div
        className="md:hidden flex items-center text-white cursor-pointer"
        onClick={onClickHamburger}
      >
        {!visible ? (
          <GiHamburgerMenu style={{ fontSize: "25px" }} />
        ) : (
          <IoClose style={{ fontSize: "30px" }} />
        )}
      </div>
      <div className="text-white font-questrial md:flex hidden items-center space-x-14 ">
        <p>Services</p>
        <p>Project</p>
        <p>Teams</p>
      </div>
      <div className="md:flex hidden">
        <button className="p-2 px-3 text-white font-questrial bg-white bg-opacity-30 rounded-lg">
          <p>{data.title}</p>
        </button>
      </div>
    </nav>
  );
}
