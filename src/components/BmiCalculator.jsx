import { FaCalculator } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoMdRefresh } from "react-icons/io";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Helper component for smooth number count-up animation
function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));
  const [displayValue, setDisplayValue] = useState("0.0");

  useEffect(() => {
    if (value !== null) {
      const controls = animate(count, value, {
        duration: 0.8,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  if (value === null) return "--";
  return displayValue;
}

function BmiCalculator() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [catagory, setCatagory] = useState("");
  const [message, setMessage] = useState("");

  const Refresh = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setBmi(null);
    setCatagory("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const heightInMeters = h * 0.3048;
      const bmiValue = Number(
        (w / (heightInMeters * heightInMeters)).toFixed(1),
      );

      setBmi(bmiValue);
      checkCatagory(bmiValue);
    }
  };

  const checkCatagory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCatagory("Under");
      setMessage("Needs More Nutrition");
    } else if (bmiValue < 25) {
      setCatagory("Normal");
      setMessage("Healthy And Fit");
    } else if (bmiValue < 30) {
      setCatagory("Over");
      setMessage("Stay More Active");
    } else {
      setCatagory("Obese");
      setMessage("Improve Your Health");
    }
  };

  const minBmi = 15;
  const maxBmi = 35;
  const currentBmi = bmi ?? 0;
  const bmiSliderPercentage = Math.min(
    Math.max(((currentBmi - minBmi) / (maxBmi - minBmi)) * 100, 0),
    100,
  );

  // Stagger variants for form fields
  const formFieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="flex w-full items-center justify-center bg-white px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-15 flex w-full max-w-4xl flex-col items-center gap-6"
      >
        {/* Header */}
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <h1 className="font-made text-2xl font-bold text-black">
            KNOW YOUR BATTERY METRICS
          </h1>
          <p className="font-made mb-5 max-w-sm text-xs text-neutral-600">
            Calculate your BMI instantly and understand where you stand on your
            fitness journey before you begin.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex w-full flex-col items-stretch justify-center gap-5 lg:flex-row">
          {/* Left Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex w-full flex-col justify-between rounded-xl bg-black p-6 lg:w-[44.4%]"
          >
            <div>
              <div className="mb-5 flex flex-row items-center gap-3">
                <div className="border-yellow flex h-10 w-10 items-center justify-center rounded-xl border-t-2 border-r border-l p-2 shadow-[0_0_10px_rgba(255,255,0,0.6)]">
                  <FaCalculator className="text-yellow h-5 w-5" />
                </div>
                <h2 className="font-made text-lg font-semibold text-white">
                  BMI Calculator
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Age */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={formFieldVariants}
                  className="space-y-1"
                >
                  <label
                    htmlFor="Age"
                    className="font-md font-made block pl-1 text-xs font-semibold text-white sm:text-sm"
                  >
                    Age
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="Age"
                      step="any"
                      min="1"
                      max="120"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full rounded-xl border border-[#262626] bg-black py-2.5 pr-14 pl-3.5 text-xs text-white transition-colors focus:border-[#e3fd2b] focus:outline-none sm:text-sm"
                    />
                  </div>
                </motion.div>

                {/* Height */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={formFieldVariants}
                  className="space-y-1"
                >
                  <label
                    htmlFor="height"
                    className="font-md font-made block pl-1 text-xs font-semibold text-white sm:text-sm"
                  >
                    Height
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="height"
                      step="any"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="focus:border-yellow w-full rounded-xl border border-[#262626] bg-black py-2.5 pr-14 pl-3.5 text-xs text-white transition-colors focus:outline-none sm:text-sm"
                    />
                    <p className="absolute right-3 text-xs text-zinc-400">
                      feet
                    </p>
                  </div>
                </motion.div>

                {/* Weight */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={formFieldVariants}
                  className="space-y-1"
                >
                  <label
                    htmlFor="Weight"
                    className="font-md font-made block pl-1 text-xs font-semibold text-white sm:text-sm"
                  >
                    Weight
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="weight"
                      step="any"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="focus:border-yellow w-full rounded-xl border border-[#262626] bg-black py-2.5 pr-14 pl-3.5 text-xs text-white transition-colors focus:outline-none sm:text-sm"
                    />
                    <p className="absolute right-3 text-xs text-zinc-400">Kg</p>
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-yellow mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold text-black transition-all hover:bg-[#d0ea1e] sm:text-sm"
                >
                  Calculate BMI
                  <GoArrowRight className="h-4 w-4 stroke-[0.5]" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Result Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex w-full flex-col items-center justify-between gap-5 rounded-xl bg-black p-6 lg:w-[55.6%]"
          >
            {/* Header */}
            <div className="flex w-full flex-row items-center justify-between">
              <h2 className="font-made text-lg font-bold text-white">
                Your BMI Result
              </h2>
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={Refresh}
              >
                <div className="group-hover:border-yellow flex h-6 w-6 items-center justify-center rounded-full border border-white p-1 transition-colors duration-300">
                  <IoMdRefresh className="group-hover:text-yellow text-xs text-white transition-colors duration-300" />
                </div>
              </motion.div>
            </div>

            {/* Glowing Circle */}
            <div className="my-2 flex w-full items-center justify-center">
              <motion.div
                key={bmi ?? "empty"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative flex h-44 w-44 items-center justify-center"
              >
                {/* Pulsing Glow Animation */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: bmi !== null ? [0.6, 0.9, 0.6] : [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-yellow/30 absolute inset-0 rounded-full blur-xl"
                />

                <div className="border-yellow absolute inset-0 rounded-full border-2 shadow-[0_0_10px_yellow]" />
                <div className="relative flex flex-col items-center gap-1 text-center">
                  <span className="font-made text-xs font-medium tracking-wide text-neutral-400">
                    BMI
                  </span>

                  {/* Dynamic Number Counter */}
                  <span className="text-4xl font-bold text-white">
                    <AnimatedNumber value={bmi} />
                  </span>

                  {!catagory ? (
                    <h3 className="font-made text-xs text-red-500">
                      Please enter details
                    </h3>
                  ) : (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="font-made rounded-full bg-green-900/60 px-2.5 py-0.5 text-xs font-medium text-green-400"
                    >
                      {catagory} Weight
                    </motion.span>
                  )}
                  <span className="font-made text-xs text-white">
                    {message}
                  </span>
                  <span className="font-made text-[10px] text-yellow-400/80">
                    Keep Pushing Forward!
                  </span>
                </div>
              </motion.div>
            </div>

            {/* BMI Slider Bar */}
            <div className="w-full px-1">
              {/* Category Titles */}
              <div className="mb-2 grid grid-cols-4 text-center text-xs font-medium text-neutral-300">
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative flex h-4 w-full items-center">
                {/* Bar Gradient Background */}
                <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-neutral-600 via-lime-400 via-orange-500 via-yellow-400 to-red-600" />

                {/* Animated Marker Handle */}
                {bmi !== null && (
                  <motion.div
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ left: "0%" }}
                    animate={{ left: `${bmiSliderPercentage}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#8bf000] shadow-[0_0_12px_#8bf000]">
                      <div className="h-3 w-3 rounded-full bg-[#8bf000]" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Range Values */}
              <div className="mt-2 grid grid-cols-4 text-center text-xs font-semibold">
                <span className="text-yellow-300">&lt; 18.5</span>
                <span className="text-lime-400">18.5–24.9</span>
                <span className="text-orange-400">25–29.9</span>
                <span className="text-red-500">&gt; 30</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default BmiCalculator;
