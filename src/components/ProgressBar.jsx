import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Reusable Progress Bar Component
const ProgressBar = ({ label, percentage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, percentage, {
        duration: 1,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, percentage, count]);

  return (
    <div ref={ref} className="mb-5 rounded-full w-full last:mb-0">
      <div className="mb-3 flex justify-between font-made font-semibold text-white">
        <span>{label}</span>
        <div className="flex">
          <motion.span>{rounded}</motion.span>
          <span>%</span>
        </div>
      </div>
      {/* Bar Background */}
      <div className="h-1.5 w-full rounded-full bg-zinc-800">
        {/* Animated Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-yellow rounded-full h-full"
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#111111] px-6 py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Subtitle */}
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-yellow h-3 w-3 rotate-45 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
            <span className="text-sm font-semibold font-made tracking-widest text-white uppercase">
              Our Skills View
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-3xl leading-tight font-bold font-made text-white md:text-3xl lg:text-4xl">
            We Are Giving You The <br className="hidden md:block" />
            Best Training Ever
          </h2>

          {/* Description */}
          <p className="max-w-md leading-relaxed text-white">
            We provide the best program for you, for your health and beauty from
            outside and inside. We provide the best gym
          </p>
        </motion.div>

        {/* Right Content: Progress Bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col justify-center"
        >
          <ProgressBar label="Body Building" percentage={90} />
          <ProgressBar label="Yoga" percentage={82} />
          <ProgressBar label="Cardio Excercise" percentage={85} />
        </motion.div>
      </div>
    </section>
  );
}
