import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function HealthSection() {
  return (
    <section className="relative flex w-full items-center justify-center p-4 lg:p-10">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/img/health-bg.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="relative z-10 mx-auto flex w-[95%] items-center justify-center overflow-hidden px-4 py-12 lg:w-[80%] lg:px-8">
        <div className="relative z-10 mx-auto flex h-auto w-full max-w-4xl flex-col items-center lg:h-100 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-30 w-full max-w-xs lg:w-5/12 lg:max-w-none"
          >
            <img
              src="/img/Group 35 (1).png"
              alt=""
              className="absolute -top-4 -right-8 z-0 w-50 sm:-top-5 sm:-right-6 md:-top-3 md:-right-4 md:w-52 lg:top-2 lg:-right-8"
            />
            {/* Main Video */}
            <div className="relative z-10 aspect-square overflow-hidden lg:aspect-[4/5]">
              <video
                src="/img/Recording 2026-07-09 114756.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover lg:mt-10 lg:h-80 lg:w-100"
              />
            </div>
            {/* Bottom Left Diagonal Pattern */}
            <img
              src="/img/Group 35 (1).png"
              alt=""
              className="absolute -bottom-1 -left-4 z-0 w-24 sm:-bottom-5 sm:-left-6 sm:w-52 md:-bottom-3 md:-left-4 md:w-52 lg:-bottom-1 lg:-left-9"
            />{" "}
          </motion.div>

          {/* Right: Text Content Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}

            className="relative z-10 mt-[-2rem] w-full bg-[#2a2a2a] p-6 pt-14 shadow-xl md:p-8 md:pt-10 lg:mt-0 lg:-ml-16 lg:w-[80%] lg:p-10 lg:pl-30"
          >
            <h2 className="font-made mb-4 text-2xl leading-tight font-bold text-white md:text-3xl">
              Improve Your Health With Us
            </h2>

            <p className="font-made mb-8 pr-0 text-xs leading-relaxed text-gray-300 md:pr-6 md:text-sm">
              "At IronForge, we believe true transformation is built through
              discipline, consistency, and the courage to push beyond limits."
            </p>

            {/* Author & Socials Footer */}
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="bg-yellow h-[2px] w-4"></div>
                <div>
                  <h4 className="font-made text-xs font-bold tracking-wide text-white uppercase">
                    Jeet salaal
                  </h4>
                  <p className="font-made mt-1 text-[10px] text-gray-400">
                    CEO of IronForge
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="hover:bg-yellow flex h-8 w-8 items-center justify-center bg-[#313131] text-yellow transition-colors duration-300 hover:text-black"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center bg-[#3a3a3a] text-yellow transition-colors duration-300 hover:bg-yellow hover:text-black"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center bg-[#3a3a3a] text-yellow transition-colors duration-300 hover:bg-yellow hover:text-black"
                >
                  <FaFacebookF size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}