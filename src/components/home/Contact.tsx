export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-between">
      <p className="md:text-4xl font-michroma mb-4">Contact Us</p>
      <p className="font-questrial text-center sm:text-base text-xs mb-10 ">
        Get in touch with us for tailored solutions
      </p>
      <form className="flex flex-col items-center justify-between font-michroma space-y-8">
        <div className="flex sm:flex-row flex-col items-center justify-between sm:space-x-8 sm:space-y-0 space-y-8">
          <input
            type="text"
            placeholder="Name"
            className="p-5 text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5"
          ></input>
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-5 text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5"
          ></input>
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-5 text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5"
        ></input>
        <input
          type="text"
          className="w-full h-[200px] p-5 text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5 text-start"
          placeholder="How can we help?"
        ></input>
        <button className="sm:p-2 sm:px-8 p-2 px-8 md:text-lg sm:text-sm mt-5 text-xs font-questrial rounded-md bg-btnBlue">
          Submit
        </button>
      </form>
    </section>
  );
}
