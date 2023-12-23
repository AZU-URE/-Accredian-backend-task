import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
export default function getQuote() {
  return (
    <main className="bg-gradient-to-br from-[#182246] to-[#1b1330] w-full min-h-screen flex flex-col text-white overflow-hidden items-center">
      <Navbar title={"Contact Us"} />
      <div className="w-full sm:px-40 px-5 flex flex-col items-center justify-between m-16">
        <p className="md:text-4xl text-xl font-michroma mb-4">
          Get Quote for your Project
        </p>
        <p className="font-questrial text-center sm:text-base text-xs mb-12 ">
          Request a customized price quote tailored to your needs
        </p>
        <form className="flex flex-col items-center justify-between font-michroma space-y-10 w-full">
          <input
            type="text"
            placeholder="Name"
            className=" w-full sm:p-5 p-2 text-sm sm:text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5"
          ></input>
          <input
            type="text"
            placeholder="Project Description"
            className="w-full sm:p-5 p-2 text-sm sm:text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5"
          ></input>
          <p className="sm:text-[24px] text-base w-full text-left">
            Project Category
          </p>
          <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-3 w-full items-center justify-between text-sm sm:text-lg ">
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                id="initial"
                className="bg-white/30 sm:h-[36px] sm:w-[36px] h-[18px] w-[18px] bg-black"
              ></input>
              <label className="" htmlFor="inital">
                Initial Stage
              </label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="bg-transparent bg-gradient-to-r from-white/15 to-white/5 sm:h-[36px] sm:w-[36px] h-[18px] w-[18px]"
              ></input>
              <label>Intermediate Stage</label>
            </div>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                className="bg-transparent bg-gradient-to-r from-white/15 to-white/5 sm:h-[36px] sm:w-[36px] h-[18px] w-[18px]"
              ></input>
              <label>Advanced Stage</label>
            </div>
          </div>
          <input
            type="text"
            className="w-full h-[200px] sm:p-5 p-2 text-sm sm:text-lg rounded-md border-b-[1px] border-l-[1px] border-white bg-transparent bg-gradient-to-r from-white/15 to-white/5 text-start"
            placeholder="Anything you want to add?"
          ></input>
          <button className="sm:p-2 sm:px-8 p-2 px-8 md:text-lg sm:text-sm mt-5 text-xs font-questrial rounded-md bg-btnBlue ">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
