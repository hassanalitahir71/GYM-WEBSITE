import { FiArrowUpRight } from "react-icons/fi";

const FreeSession = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/img/booksetion.jpg"
        alt="Workout Background"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center">
        {/* Heading */}
        <h1 className="font-mona mx-auto max-w-5xl text-5xl leading-[1.1] font-bold text-white uppercase md:text-7xl lg:text-[90px]">
          Ready to forge <br className="hidden md:block" /> your best self?
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-xl text-base text-gray-200 md:text-lg lg:text-xl">
          Push Your Limits, Break Barriers, and{" "}
          <br className="hidden md:block" />
          Become Truly Unstoppable
        </p>

        {/* CTA Button */}
        <button className="group mt-10 flex cursor-pointer items-center gap-4 rounded-full bg-[#fdf001] py-2 pr-2 pl-8 transition-all duration-300 hover:bg-white hover:text-black">
          <span className="font-mona text-base font-semibold text-black transition-colors duration-300">
            Book a Free Session
          </span>

          {/* Arrow Icon Circle */}
          <div className="group-hover:bg-yellow flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
            <FiArrowUpRight className="text-xl font-bold text-white group-hover:text-black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FreeSession;
