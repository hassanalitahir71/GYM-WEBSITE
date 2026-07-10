import NavBar from "./NavBar";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

function HeroSection( {page} ) {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

 
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
 
    
      
// HomePage Hero Section

       if (page === "HomePage") {
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
                       personalized training, and a community that pushes you
                       forward.
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

       if (page === "AboutUs") {
         return (
           <>
             <section
               className="relative flex min-h-screen w-full flex-col"
               style={{
                 backgroundImage: 'url("/img/AboutHeroSection.jpg")',
                 backgroundSize: "cover",
                 backgroundPosition: "start",
               }}
             >
               {/* Dark gradient overlay for text readability */}
               <div className="absolute inset-0 bg-black opacity-60 lg:bg-gradient-to-r lg:from-black lg:via-black/50 lg:to-black/50"></div>

               {/* Content Wrapper - Using z-10 to stay above overlay */}
               <div className="relative z-10 flex min-h-screen w-full flex-col">
                 {/* Navbar sits at the absolute top of the container */}

                 <NavBar />

                 <div className="mx-auto mt-10 flex w-full max-w-7xl flex-1 items-center px-6 py-8 lg:px-16">
                   <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
                     {/* Left Column: Text Content */}
                     <div className="flex flex-col gap-4">
                       {/* Section Subtitle */}
                       <div className="font-made flex items-center gap-3 text-sm font-semibold tracking-widest text-white uppercase">
                         <div className="bg-yellow h-3 w-3 rotate-45"></div>
                         <span>
                           About <span className="text-yellow">IronForge</span>
                         </span>
                       </div>

                       {/* Main Heading */}
                       <h2 className="font-made text-3xl leading-13 text-white sm:text-3xl lg:text-5xl">
                         Providing The Best <br className="hidden sm:block" />
                         Service For Your Health{" "}
                         <br className="hidden sm:block" />
                         And Fitness
                       </h2>

                       {/* Description */}
                       <p className="font-made max-w-lg text-base leading-relaxed text-gray-300 sm:text-sm">
                         At IronForge, fitness isn't casual it's a structured
                         system built on consistency, intensity, and real
                         results. It's about showing up when it's hard, pushing
                         beyond limits, and committing to a process that
                         transforms not just your body, but your mindset,
                         confidence, and lifestyle.
                       </p>
                     </div>

                     {/* Right Column: Statistics Grid */}
                     <motion.div
                       variants={containerVariants}
                       initial="hidden"
                       whileInView="show"
                       viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is in view
                       className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
                     >
                       {/* Stat Card 1 */}
                       <motion.div
                         variants={cardVariants}
                         className="font-made flex flex-col justify-center border-b-4 border-transparent bg-[#222222]/90 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-b-4 hover:border-yellow-400"
                       >
                         <h3 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                           15+
                         </h3>
                         <p className="text-lg text-gray-400">
                           Years Experiences
                         </p>
                       </motion.div>

                       {/* Stat Card 2 */}
                       <motion.div
                         variants={cardVariants}
                         className="flex flex-col justify-center border-b-4 border-transparent bg-[#222222]/90 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-b-4 hover:border-yellow-400"
                       >
                         <h3 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                           4K+
                         </h3>
                         <p className="text-lg text-gray-400">
                           Satisfied Clients
                         </p>
                       </motion.div>

                       {/* Stat Card 3 */}
                       <motion.div
                         variants={cardVariants}
                         className="flex flex-col justify-center border-b-4 border-transparent bg-[#222222]/90 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-b-4 hover:border-yellow-400"
                       >
                         <h3 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                           80+
                         </h3>
                         <p className="text-lg text-gray-400">Awards Winner</p>
                       </motion.div>

                       {/* Stat Card 4 */}
                       <motion.div
                         variants={cardVariants}
                         className="flex flex-col justify-center border-b-4 border-transparent bg-[#222222]/90 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-b-4 hover:border-yellow-400"
                       >
                         <h3 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                           25+
                         </h3>
                         <p className="text-lg text-gray-400">
                           Trained Coaches
                         </p>
                       </motion.div>
                     </motion.div>
                   </div>
                 </div>
               </div>
             </section>
           </>
         );
       }


      if (page === "OurTeam") {
    return (
      <>
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black">
          {/* 1. Background Image Layer */}
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/img/OurTeamHero.jpg")',
            }}
          ></div>

          {/* 2. Dark Gradient Overlay Layer */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-black/50 bg-gradient-to-b from-black via-transparent to-black"></div>

          {/* 3. Main Wrapper */}
          <div className="relative z-10 flex min-h-screen w-full flex-col">
            {/* NavBar sits at the absolute top of the section */}
            <div className="relative z-50 w-full">
              <NavBar />
            </div>

            {/* Main Content Container - Using framer-motion to trigger animations when scrolled into view */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is visible
              className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center"
            >
              {/* Graphic & Title Wrapper (Fades up first) */}
              <motion.div
                variants={cardVariants}
                className="relative flex w-full flex-col items-center justify-center py-10 md:py-20"
              >
                {/* Diamond Background Pattern - Added a continuous "breathing" animation */}
                <motion.img
                  src="/img/Group 34.png"
                  alt="Diamond Pattern"
                  animate={{
                    scale: [1, 1.05, 1], // Slightly scales up and down
                    opacity: [0.3, 0.5, 0.3], // Slightly pulses opacity
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute top-40 left-1/2 z-0 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:w-[350px] md:w-[500px]"
                />

                {/* Text Composition Stack */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center">
                  {/* Faded/Shadow "OUR TEAM" Text */}
                  <img
                    src="/img/our Team.png"
                    alt=""
                    className="pointer-events-none absolute top-6 w-[250px] sm:top-8 sm:w-[320px] md:top-12 md:w-[550px]"
                  />

                  {/* Outlined "OUR TEAM" Text (Main Layer) */}
                  <img
                    src="/img/our Team (1).png"
                    alt="Our Team"
                    className="pointer-events-none relative z-10 w-[280px] sm:w-[350px] md:w-[600px]"
                  />
                </div>
              </motion.div>

              {/* 4. Description Paragraph (Fades up slightly after the title) */}
              <motion.p
                variants={cardVariants}
                className="font-made relative z-20 mt-4 max-w-3xl px-4 text-sm leading-relaxed text-gray-300 sm:text-base md:mt-8 md:text-lg"
              >
                Our team is made up of experienced coaches and fitness experts
                dedicated to helping you achieve real results. With a strong
                focus on discipline, technique, and consistency, they provide
                the guidance and support needed at every step of your journey.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </>
    );
       }


       
}

export default HeroSection;
