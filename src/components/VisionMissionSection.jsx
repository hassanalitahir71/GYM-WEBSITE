
import { motion } from "framer-motion";

// 1. MOVED OUTSIDE: This fixes the React error!
const CheckItem = ({ text }) => (
  <li className="flex items-start gap-4">
    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-yellow-400">
      <svg
        className="h-4 w-4 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-gray-300 sm:text-lg">{text}</span>
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
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-24">
      {/* Optional: Faint background image overlay if needed */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/img/your-faint-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* CENTER DASHED TIMELINE LINE (Hidden on mobile) */}
        <div className="absolute top-0 bottom-0 left-1/2 hidden w-[1px] -translate-x-1/2 border-l border-dashed border-gray-600 md:block"></div>

        {/* =========================================
            ROW 1: OUR VISION
        ========================================= */}
        <div className="relative mb-24 grid grid-cols-1 items-center gap-12 md:mb-32 md:grid-cols-2 md:gap-24">
          {/* Timeline Diamond */}
          <div className="absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] md:block"></div>

          {/* Left: Text Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col pr-0 md:pr-10"
          >
            <h2 className="font-made mb-6 text-4xl font-bold text-white sm:text-5xl">
              Our Vision
            </h2>
            <p className="mb-8 leading-relaxed text-gray-400 sm:text-lg">
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
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            {/* Striped Background (bingkai foto.png) */}
            <img
              src="/img/bingkai foto.png"
              alt=""
              className="absolute -right-8 -bottom-8 z-0 w-32 opacity-60 sm:-right-12 sm:-bottom-12 sm:w-48"
            />

            {/* Main Image */}
            <img
              src="/img/33450f1f6e2aa3a85a6c2ac15eaf252fdb737581.jpg"
              alt="Man exercising"
              className="relative z-10 w-full object-cover shadow-2xl"
            />

            {/* Icon Box (Group 8453.png - Lightbulb) */}
            <div className="absolute -right-6 -bottom-6 z-20 flex h-20 w-20 items-center justify-center bg-[#2A2A2A] shadow-lg sm:-right-10 sm:-bottom-10 sm:h-24 sm:w-24">
              <img
                src="/img/Group 8453.png"
                alt="Lightbulb Icon"
                className="h-10 w-10 opacity-70 sm:h-12 sm:w-12"
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================
            ROW 2: OUR MISSION
        ========================================= */}
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
          {/* Timeline Diamond */}
          <div className="absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] md:block"></div>

          {/* Left: Image Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 mx-auto w-full max-w-md md:order-1 md:max-w-none"
          >
            {/* Striped Background (Shifted to Left Side) */}
            <img
              src="/img/bingkai foto.png"
              alt=""
              className="absolute -bottom-8 -left-8 z-0 w-32 opacity-60 sm:-bottom-12 sm:-left-12 sm:w-48"
            />

            {/* Main Image (Replace path with your actual trainer image) */}
            <img
              src="/img/mission-image.jpg"
              alt="Trainer helping student"
              className="relative z-10 w-full object-cover shadow-2xl"
            />

            {/* Icon Box (Flag Icon - Shifted to Left Side) */}
            <div className="absolute -bottom-6 -left-6 z-20 flex h-20 w-20 items-center justify-center bg-[#2A2A2A] shadow-lg sm:-bottom-10 sm:-left-10 sm:h-24 sm:w-24">
              <svg
                className="h-10 w-10 text-gray-400 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 flex flex-col pl-0 md:order-2 md:pl-10"
          >
            <h2 className="font-made mb-6 text-4xl font-bold text-white sm:text-5xl">
              Our Mission
            </h2>
            <p className="mb-8 leading-relaxed text-gray-400 sm:text-lg">
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
