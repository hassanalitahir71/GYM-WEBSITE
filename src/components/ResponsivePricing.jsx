import { motion } from "framer-motion"; // 1. Imported framer-motion

function ResponsivePricing() {
  const features = [
    {
      id: 1,
      title: "Recovery & Mobility Sessions",
      description:
        "Improve flexibility, reduce injury risk, and recover faster with guided mobility and stretching sessions.",
      icon: (
        <img
          src="img/yoga pose.png"
          alt=""
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
        />
      ),
    },
    {
      id: 2,
      title: "Body Composition Analysis",
      description:
        "Track your progress with detailed insights into body fat, muscle mass, and overall fitness metrics.",
      icon: (
        <img
          src="img/scale.png"
          alt=""
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
        />
      ),
    },
    {
      id: 3,
      title: "Health & Fitness Monitoring",
      description:
        "Stay on top of your performance with regular health checks and personalized fitness tracking tools.",
      icon: (
        <img
          src="img/pulse 2.png"
          alt=""
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
        />
      ),
    },
    {
      id: 4,
      title: "Guided Training Support",
      description:
        "Access expert guidance and structured routines to ensure every workout is effective and goal-focused.",
      icon: (
        <img
          src="img/yogapose2.png"
          alt=""
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
        />
      ),
    },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24">
      <div className="mb-12 text-center sm:mb-20">
        <h2 className="font-made px-2 text-xl font-bold tracking-wider text-black uppercase sm:text-2xl md:text-3xl">
          All Pricing Plans Include
        </h2>
      </div>

     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} 
        className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-x-12 gap-y-10 sm:gap-y-14 md:grid-cols-2 lg:gap-x-20"
      >
        {features.map((feature) => (
          
          <motion.div
            key={feature.id}
            variants={itemVariants}
            className="flex flex-col items-center gap-5 rounded-lg bg-gray-50/50 p-5 text-center sm:flex-row sm:items-start sm:gap-6 sm:rounded-none sm:bg-transparent sm:p-0 sm:text-left"
          >
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-sm bg-[#212121] shadow-sm sm:h-20 sm:w-20">
              {feature.icon}
            </div>

            <div className="flex max-w-lg flex-col gap-2">
              <h3 className="font-made text-base font-bold tracking-tight text-black sm:text-lg md:text-xl">
                {feature.title}
              </h3>
              <p className="font-made text-xs leading-relaxed text-[#4A4A4A] sm:text-sm md:text-[15px]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ResponsivePricing;
