
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function CoreTeam() {

    const teamMembers = [
      {
        name: "Sajjad Azam",
        role: "Muscle Instructor",
        image: "/img/core1.png",
      },
      {
        name: "Ahmed Ali",
        role: "Crossfit Trainer",
        image: "/img/0b487dff9025260f300b8ac91194ebfe1ad1d4ca.png",
      },
      {
        name: "Ibrar Hussain",
        role: "Fitness Coach",
        image: "/img/0b487dff9025260f300b8ac91194ebfe1ad1d4ca.png",
      },
    ];
  return (
    <>
      <section className="bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header Area */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gray-400"></div>
              <div className="h-3 w-3 rotate-45 bg-yellow-400"></div>
              <span className="font-made text-sm font-bold tracking-widest text-black uppercase">
                Core Team
              </span>
              <div className="h-[1px] w-12 bg-gray-400"></div>
            </div>

            <h2 className="font-made text-4xl font-bold tracking-wide text-black uppercase md:text-5xl">
              Team Of Gym And Fitness
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex cursor-pointer flex-col items-center"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden rounded-t-xl bg-gradient-to-b from-yellow-300 to-yellow-600">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute bottom-0 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay for Social Icons */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors duration-300 hover:bg-white"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors duration-300 hover:bg-white"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors duration-300 hover:bg-white"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* Info Container */}
                <div className="w-full rounded-b-xl bg-[#333333] p-6 text-center shadow-lg transition-colors duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                  <h3 className="font-made mb-1 text-xl font-bold text-white group-hover:text-black">
                    {member.name}
                  </h3>
                  <p className="font-made text-sm text-gray-400 group-hover:text-gray-800">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreTeam;
