import Image from "next/image";
interface data {
  title: String;
  desc: String;
}
export default function ProjectCard(data: data) {
  return (
    <div className="font-questrial flex flex-col justify-center items-center border-[1px] border-white rounded-lg p-10 relative pt-16 mt-52">
      <Image
        src={"/project.png"}
        height={250}
        width={250}
        alt="project"
        className="-top-52 absolute place-items-center"
      />
      <div>
        <p className="sm:text-3xl text-2xl mb-3 text-left">{data.title}</p>
        <p className="sm:text-base text-sm text-left">{data.desc}</p>
        <button className="w-full rounded-md p-3 sm:px-8 px-2 md:text-lg sm:text-sm mt-5 text-xs bg-gradient-to-r from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.06)]">
          See the project
        </button>
      </div>
    </div>
  );
}
