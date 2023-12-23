import TeamCard from "./TeamCard";
export default function Team() {
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="md:text-4xl font-michroma mb-4">Team</p>
      <p className="font-questrial text-center sm:text-base text-xs mb-10">
        Meet our dynamic team
      </p>
      <div className="grid grid-parent lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-24">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
}
