import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const FreeSession = () => {
  // Animation variants for the container to stagger its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each element's animation
      },
    },
  };

  // Animation variants for individual elements sliding up
  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Starts 40px lower and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/img/booksetion.jpg"
        alt="Workout Background"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Content Wrapper converted to motion.div */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animates once when 30% of the section is visible
        className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-mona mx-auto max-w-5xl text-5xl leading-[1.1] font-bold text-white uppercase md:text-7xl lg:text-[90px]"
        >
          Ready to forge <br className="hidden md:block" /> your best self?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl text-base text-gray-200 md:text-lg lg:text-xl"
        >
          Push Your Limits, Break Barriers, and{" "}
          <br className="hidden md:block" />
          Become Truly Unstoppable
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          className="group mt-10 flex cursor-pointer items-center gap-4 rounded-full bg-[#fdf001] py-2 pr-2 pl-8 transition-all duration-300 hover:bg-white hover:text-black"
        >
          <span className="font-mona text-base font-semibold text-black transition-colors duration-300">
            Book a Free Session
          </span>

          {/* Arrow Icon Circle */}
          <div className="group-hover:bg-yellow flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:rotate-45">
            <FiArrowUpRight className="text-xl font-bold text-white group-hover:text-black" />
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FreeSession;
