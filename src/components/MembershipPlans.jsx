import { useState } from "react";
import Packages from "./Packages";

function MembershipPlans() {
  const [activePlan, setActivePlan] = useState("monthly");

  return (
    <section className="px-4 py-10  mt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="font-made text-yellow text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Membership Plans
          </h1>

          <p className="mt-2 max-w-md text-sm text-white sm:text-base">
            Flexible plans designed for every fitness goal.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex w-fit items-center rounded-full border border-white bg-[#1A1A1A] p-1 shadow-[inset_0_2px_8px_rgba(255,255,255,0.15)]">
          {/* Monthly */}
          <button
            onClick={() => setActivePlan("monthly")}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 sm:px-7 sm:py-3 ${
              activePlan === "monthly"
                ? "bg-yellow text-black"
                : "bg-transparent text-white"
            }`}
          >
            Monthly
          </button>

          {/* Annually */}
          <button
            onClick={() => setActivePlan("annually")}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 sm:px-7 sm:py-3 ${
              activePlan === "annually"
                ? "bg-yellow text-black"
                : "bg-transparent text-white"
            }`}
          >
            Annually
          </button>
        </div>

        <Packages activePlan={activePlan} />
      </div>
    </section>
  );
}

export default MembershipPlans;
