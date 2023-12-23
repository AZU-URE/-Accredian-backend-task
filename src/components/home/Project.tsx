import ProjectCard from "./ProjectCard";
export default function Project() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p className="md:text-4xl text-2xl font-michroma mb-4">Projects</p>
        <p className="font-questrial text-center sm:text-base text-xs mb-6">
          A showcase for our projects, demonstrating our commitment
          <br /> to innovate and client success
        </p>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-parent gap-16 sm:px-28 px-10">
          <ProjectCard
            title={"Lorem Ipsum"}
            desc={
              "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend.In at hendrerit tellus. Nunc velullamcorper eros."
            }
          />
          <ProjectCard
            title={"Lorem Ipsum"}
            desc={
              "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend.In at hendrerit tellus. Nunc velullamcorper eros."
            }
          />
          <ProjectCard
            title={"Lorem Ipsum"}
            desc={
              "Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend.In at hendrerit tellus. Nunc velullamcorper eros."
            }
          />
        </div>
      </div>
    </section>
  );
}
