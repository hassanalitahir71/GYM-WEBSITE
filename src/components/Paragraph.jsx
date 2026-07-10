import { motion } from "framer-motion";

function Pragraph({ HomePage, AboutUs }) {
  // homepage animation
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

  // --- ABOUT US ANIMATIONS (New) ---
  // Heading scales up from 80% size and fades in
  const aboutHeadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Description slides in from the left instead of the bottom
  const aboutDescriptionVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (HomePage) {
    return (
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
    );
  }

 if (AboutUs) {
   return (
     <motion.section
       variants={containerVariants}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false, amount: 0.2 }}
       // 1. Made this a full-width relative container with hidden overflow so the large background doesn't break the layout
       className="relative mx-auto mt-4 mb-10 flex w-full flex-col items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-24"
     >
       {/* 2. THE BACKGROUND IMAGE (FITNESS.png) */}
       <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
         <img
           src="/img/FITNESS.png" 
           alt=""
           className="w-[120%] max-w-[1600px] object-contain  sm:w-full "
         />
       </div>

       {/* 3. THE FOREGROUND CONTENT (z-10 ensures it stays on top of the image) */}
       <div className="relative z-10 mx-auto flex w-[90%] flex-col items-center justify-center gap-4 sm:w-[85%] lg:w-[70%] lg:gap-8">
         {/* Section Heading */}
         <motion.h1
           variants={aboutHeadingVariants}
           className="font-made text-2xl font-medium text-white sm:text-3xl lg:text-[35px]"
         >
           OUR <span className="text-yellow-400">VALUES</span>
         </motion.h1>

         {/* Section Description */}
         <motion.p
           variants={aboutDescriptionVariants}
           className="font-made text-md text-center leading-8 text-white sm:text-xl sm:leading-12 lg:text-[20px] lg:leading-8"
         >
           We build strong values for you, for your discipline and growth from
           outside and inside. We create a focused gym & fitness environment for
           you. Our dedicated team works to guide every step with purpose and
           consistency.
         </motion.p>
       </div>
     </motion.section>
   );
 }
}

export default Pragraph;
