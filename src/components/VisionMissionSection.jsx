import { motion } from "framer-motion";
import { IoCheckboxOutline } from "react-icons/io5";

// 1. MOVED OUTSIDE: This fixes the React error!
const CheckItem = ({ text }) => (
  <li className="flex items-start gap-4">
    <div className="mt-1 flex items-center justify-center text-yellow-400">
      <IoCheckboxOutline className="h-5 w-5" />
    </div>
    <span className="sm:text-md text-gray-300">{text}</span>
  </li>
);

// 2. MAIN COMPONENT
function VisionMissionSection() {
  // Animation variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-15">
      {/* Optional: Faint background image overlay if needed */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/img/vision-bg.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* CENTER DASHED TIMELINE LINE (Hidden on mobile) */}
        <div className="absolute top-0 bottom-0 left-1/2 hidden w-[1px] -translate-x-1/2 border-l border-dashed border-gray-600 md:block"></div>

        {/* ROW 1: OUR VISION */}
        <div className="relative mb-24 grid grid-cols-1 items-center gap-12 md:mb-32 md:grid-cols-2 md:gap-24">
          {/* Timeline Diamond */}
          <div className="absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] md:block"></div>

          {/* Left: Text Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-0 flex w-full flex-col pr-0 md:pr-10 lg:ml-23 lg:w-120"
          >
            <h2 className="font-made mb-6 text-3xl font-semibold text-white sm:text-4xl">
              Our Vision
            </h2>
            <p className="sm:text-md mb-8 leading-relaxed text-white">
              At IronForge, our vision is to redefine fitness through
              discipline, strength, and continuous growth, helping individuals
              push limits and unlock their full potential.
            </p>
            <ul className="flex flex-col gap-4">
              <CheckItem text="Train from beginner to elite level" />
              <CheckItem text="State-of-the-art training facility" />
              <CheckItem text="Continuous support and motivation" />
            </ul>
          </motion.div>

          {/* Right: Image Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto mt-10 ml-0 flex w-full max-w-md justify-center md:mt-0 md:max-w-none lg:ml-7 lg:block"
          >
            {/* Striped Background (bingkai foto.png) */}
            <img
              src="/img/bingkai foto (1).png"
              alt=""
              className="absolute -right-2 -bottom-4 z-0 w-48 md:right-10 md:w-60 lg:right-25 lg:bottom-10"
            />

            {/* Main Image */}
            <img
              src="/img/visionPerson.jpg"
              alt="Man exercising"
              className="relative z-10 h-64 w-64 object-cover shadow-2xl md:h-80 md:w-80"
            />

            {/* Icon Box (Group 8453.png - Lightbulb) */}
            <div className="absolute -right-4 -bottom-6 z-20 flex h-16 w-16 items-center justify-center shadow-lg md:right-16 md:h-20 md:w-20 lg:right-41 lg:bottom-26 lg:h-24 lg:w-24">
              <img
                src="/img/Bulb.png"
                alt="Lightbulb Icon"
                className="h-10 w-10 md:h-15 md:w-15 lg:h-15 lg:w-15"
              />
            </div>
          </motion.div>
        </div>

        {/* ROW 2: OUR MISSION */}
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
          {/* Timeline Diamond */}
          <div className="absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] md:block"></div>

          {/* Left: Image Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 mx-auto mt-10 flex w-full max-w-md justify-center pr-0 md:order-1 md:mt-0 md:max-w-none lg:justify-end lg:pr-10"
          >
            {/* Striped Background (bingkai foto.png) */}
            <img
              src="/img/bingkai foto (2).png"
              alt=""
              className="absolute -bottom-4 -left-2 z-0 w-48 md:left-4 md:w-60 lg:bottom-10 lg:left-15"
            />

            {/* Main Image */}
            <img
              src="/img/vision-girl.jpg"
              alt="Girl and Men exercising"
              className="relative z-10 h-64 w-64 object-cover shadow-2xl md:h-80 md:w-80"
            />

            {/* Flag Icon */}
            <div className="absolute -bottom-6 -left-4 z-20 flex h-16 w-16 items-center justify-center shadow-lg md:left-16 md:h-20 md:w-20 lg:bottom-26 lg:left-32 lg:h-24 lg:w-24">
              <img
                src="/img/flag.png"
                alt="Flag icon"
                className="h-10 w-10 md:h-15 md:w-15 lg:h-15 lg:w-15"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 flex flex-col pr-0 pl-0 md:order-2 md:pl-10 lg:pr-15"
          >
            <h2 className="font-made mb-6 text-3xl font-semibold text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="sm:text-md mb-8 leading-relaxed text-white">
              Our mission is to deliver results-driven programs that transform
              both body and mind, building lasting habits through expert
              coaching and a strong fitness community.
            </p>
            <ul className="flex flex-col gap-4">
              <CheckItem text="Personalized training approach" />
              <CheckItem text="Modern equipment and techniques" />
              <CheckItem text="Dedicated support, anytime you need" />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;
