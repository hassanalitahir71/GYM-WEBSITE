import { motion } from "framer-motion";

function AboutUs() {
  // Container variant to handle cascading/staggering animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay between heading and description
      },
    },
  };

  // Heading slides down into place
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Description text slides up into place
  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // Animates when 40% of the section enters the screen
        className="mx-auto mt-8 mb-20 flex w-[90%] flex-col items-center justify-center gap-4 py-12 sm:w-[85%] lg:w-[70%] lg:gap-10 lg:py-20"
      >
        {/* Section Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-yellow font-made text-3xl font-medium sm:text-4xl lg:text-[40px]"
        >
          About Us
        </motion.h1>

        {/* Section Description */}
        <motion.p
          variants={descriptionVariants}
          className="font-made text-center text-xl leading-8 text-white sm:text-3xl sm:leading-12 lg:text-[42px] lg:leading-12"
        >
          At <span className="font-made text-yellow">IronForge</span>, we
          believe fitness is more than lifting weights it's about building
          discipline, confidence, and a stronger version of yourself.
        </motion.p>
      </motion.div>
    </>
  );
}

export default AboutUs;
