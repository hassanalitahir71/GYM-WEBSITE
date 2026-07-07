import NavBar from "./NavBar";
import { FiArrowUpRight } from "react-icons/fi";

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="item flex h-auto min-h-screen w-full flex-col items-center bg-[url('img/Herosection.jpg')] bg-cover lg:h-220">
        {/* Navbar & Hero Content Container */}
        <div className="flex min-h-screen w-full flex-col items-center justify-between lg:h-full lg:min-h-0">
          {/* Navigation Bar */}
          <NavBar />

          {/* Hero Content */}
          <div className="mb-20 flex w-full max-w-[1440px] flex-col items-center justify-between gap-14 px-6 text-white md:flex-row lg:w-[90%] lg:px-10 xl:w-260">
            {/* Left Side Content */}
            <div className="flex w-full max-w-md flex-col items-start gap-6 md:w-100 lg:w-80">
              {/* Hero Description */}
              <h1 className="text-md sm:text-md leading-6">
                Unlock your full potential with expert-guided workouts,
                personalized training, and a community that pushes you forward.
              </h1>

              {/* Enroll Button */}
              <button className="group font-mona bg-yellow flex cursor-pointer items-center gap-2 self-start rounded-full px-3 py-2 text-black transition-all duration-300 hover:bg-gray-950">
                <h1 className="text-sm font-medium transition-colors duration-300 group-hover:text-white">
                  Enroll Now
                </h1>

                {/* Arrow Icon */}
                <div className="group-hover:bg-yellow flex items-center justify-center rounded-full bg-black p-2 transition-all duration-300">
                  <FiArrowUpRight className="text-sm font-bold text-white transition-all duration-300 group-hover:rotate-90 group-hover:text-black" />
                </div>
              </button>
            </div>

            {/* Right Side Hero Heading */}
            <div className="h-auto w-full">
              <h1 className="font-made text-center text-5xl text-white sm:text-5xl md:text-left md:text-5xl lg:text-8xl lg:leading-[78px] xl:text-[90px] xl:leading-20">
                ELEVATE YOUR
                <br />
                EXPERIENCE
              </h1>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-13 grid w-[90%] grid-cols-2 gap-8 pb-12 md:mt-30 md:flex md:w-[80%] md:flex-row md:justify-between md:pb-0">
          {/* Active Members */}
          <div className="flex h-auto flex-col items-center justify-center leading-27 md:h-[116px]">
            <h1 className="text-yellow font-made text-5xl sm:text-[80px]">
              700+
            </h1>
            <h3 className="font-made text-center text-sm font-medium text-white">
              ACTIVE MEMBERS
            </h3>
          </div>

          {/* Fitness Programs */}
          <div className="flex h-auto flex-col items-center justify-center leading-27 md:h-[116px]">
            <h1 className="text-yellow font-made text-5xl sm:text-[80px]">
              45
            </h1>
            <h3 className="font-made text-center text-sm font-medium text-white">
              FITNESS PROGRAMS
            </h3>
          </div>

          {/* Member Satisfaction */}
          <div className="flex h-auto flex-col items-center justify-center leading-27 md:h-[116px]">
            <h1 className="text-yellow font-made text-5xl sm:text-[80px]">
              98%
            </h1>
            <h3 className="font-made text-center text-sm font-medium text-white">
              MEMBER SATISFACTION
            </h3>
          </div>

          {/* Years of Experience */}
          <div className="flex h-auto flex-col items-center justify-center leading-27 md:h-[116px]">
            <h1 className="text-yellow font-made text-5xl sm:text-[80px]">
              15+
            </h1>
            <h3 className="font-made text-center text-sm font-medium text-white">
              YEARS OF EXPERIENCE
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
