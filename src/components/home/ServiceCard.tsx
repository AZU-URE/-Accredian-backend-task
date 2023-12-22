import Image from "next/image";

interface data {
  line1: String;
  line2: String;
}
export default function ServiceCard(data: data) {
  return (
    <div className="border-[1px] border-t-0 border-white p-[20px]">
      <Image
        src={"/services/service_logo.svg"}
        alt="service_logo"
        width={60}
        height={60}
        className="mb-6"
      ></Image>
      <p className="font-michroma mb-1">{data.line1}</p>
      <p className="font-michroma">{data.line2}</p>
    </div>
  );
}
