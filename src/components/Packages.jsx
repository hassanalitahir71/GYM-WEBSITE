

// Inline SVG for the checkmark icon
const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Packages = ({ activePlan = "monthly" }) => {
  const membershipPlans = {
    monthly: [
      {
        id: 1,
        name: "Basic",
        description: "For beginners taking their first steps into fitness.",
        badge: "",
        price: 19,
        duration: "/ month",
        features: [
          "Access to gym equipment",
          "Standard workout areas",
          "Locker room access",
          "3 group classes / week",
        ],
        buttonText: "Join Now",
        highlighted: false,
      },
      {
        id: 2,
        name: "Pro",
        description: "For consistent trainers building momentum.",
        badge: "Most Popular",
        price: 39,
        duration: "/ month",
        features: [
          "All Basic Features",
          "Personalized workout plan",
          "Basic diet guidance",
          "Progress tracking",
        ],
        buttonText: "Get Started",
        highlighted: true,
      },
      {
        id: 3,
        name: "Elite",
        description: "For goal-driven athletes who want full support.",
        badge: "",
        price: 79,
        duration: "/ month",
        features: [
          "All Pro Features",
          "Personalized Nutrition Plan",
          "Priority support",
          "Exclusive member perks",
        ],
        buttonText: "Go Elite Now",
        highlighted: false,
      },
    ],

    annually: [
      {
        id: 1,
        name: "Basic",
        description:
          "Perfect for beginners who want to stay committed all year.",
        badge: "Save 20%",
        price: 179,
        duration: "/ year",
        features: [
          "Access to gym equipment",
          "Unlimited workout areas",
          "Locker room access",
          "5 group classes / week",
          "1 Free fitness assessment",
        ],
        buttonText: "Join Annual",
        highlighted: false,
      },
      {
        id: 2,
        name: "Pro",
        description: "The best value for dedicated fitness enthusiasts.",
        badge: "Best Value",
        price: 349,
        duration: "/ year",
        features: [
          "All Basic Features",
          "Personalized workout plan",
          "Advanced diet guidance",
          "Progress tracking",
          "Monthly trainer consultation",
        ],
        buttonText: "Start Annual",
        highlighted: true,
      },
      {
        id: 3,
        name: "Elite",
        description: "Complete premium coaching for serious athletes.",
        badge: "Save 25%",
        price: 699,
        duration: "/ year",
        features: [
          "All Pro Features",
          "Premium Nutrition Plan",
          "24/7 Priority support",
          "Exclusive VIP member perks",
          "Quarterly body composition analysis",
        ],
        buttonText: "Go Elite Annual",
        highlighted: false,
      },
    ],
  };

  return (
    <div className="font-made min-h-80 px-4 py-8">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {membershipPlans[activePlan].map((plan) => (
          <div
            key={plan.id}
            className="group flex h-[420px] flex-col rounded-xl border border-neutral-700 bg-[#141414] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#fef041] hover:shadow-[0_0_20px_rgba(254,240,65,0.12)]"
          >
            {/* Header */}
            <div>
              <h2 className="text-xl font-semibold text-white">{plan.name}</h2>

              <p className="mt-1 h-8 overflow-hidden text-[11px] leading-4 text-gray-400">
                {plan.description}
              </p>

              {/* Badge */}
              <div className="mt-3 h-5">
                {plan.badge && (
                  <span className="rounded-full bg-[#fef041] px-2 py-1 text-[9px] font-semibold tracking-wide text-black uppercase">
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mt-3 flex items-end gap-1">
                <h1 className="text-4xl font-semibold text-white">
                  ${plan.price}
                </h1>

                <span className="pb-1 text-xs text-gray-400">
                  {plan.duration}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="mt-5 flex-1">
              <h3 className="mb-3 text-base font-medium text-white">
                Features
              </h3>

              <ul className="h-36 space-y-2 overflow-hidden">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-[11px] text-gray-300 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <button className="mt-auto w-full rounded-full border border-neutral-600 py-2.5 text-sm font-medium text-white transition-all duration-300  group-hover:border-yellow group-hover:bg-yellow group-hover:text-black hover:bg-white active:scale-95">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
