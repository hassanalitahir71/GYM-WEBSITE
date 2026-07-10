import { useRef } from "react";
// Safely import Slider to avoid Vite default export bugs
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";
import { LuQuote } from "react-icons/lu";

// 1. Testimonial Data
const testimonials = [
  {
    id: 1,
    quote:
      "I really enjoyed the training–it felt well-structured and easy to follow. The coaches were supportive and pushed me just enough to improve, and the environment made me want to keep coming back.",
    author: "Jamez Cerro",
    role: "Body Builder Student",
  },
  {
    id: 2,
    quote:
      "Joining IronForge was the best decision I've made this year. The facility is top-notch, and the community is incredibly welcoming. I've seen amazing progress in just a few months.",
    author: "Sarah Jenkins",
    role: "Fitness Enthusiast",
  },
  {
    id: 3,
    quote:
      "The personalized attention you get here is unmatched. My trainer completely transformed my approach to nutrition and lifting. Highly recommend to anyone serious about their health.",
    author: "Marcus Rivera",
    role: "Amateur Powerlifter",
  },
  {
    id: 4,
    quote:
      "As a beginner, gyms used to intimidate me. The staff here made me feel at home immediately. The beginner classes are perfectly paced and completely judgement-free.",
    author: "Emily Chen",
    role: "Yoga & Pilates Member",
  },
  {
    id: 5,
    quote:
      "I've been to many gyms, but the atmosphere here is different. Everyone is grinding, and it motivates you to push harder. The equipment is always clean and available.",
    author: "David O'Connor",
    role: "Crossfit Competitor",
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const SliderComponent = Slider.default || Slider;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white py-16">
      <div className="relative flex w-full max-w-5xl items-center justify-center px-4">
        {/* 1. LEFT STATIC GRAY BOX + BUTTON */}
        {/* Height reduced to 280px */}
        <div className="absolute top-1/2 left-2 z-0 flex h-[280px] w-[40%] -translate-y-1/2 items-center justify-start rounded-2xl bg-[#31313180] px-2 sm:left-4 sm:px-6 md:px-12">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-yellow hover:bg-yellow transform rounded-xl bg-[#4A4A4A] p-3 text-xl transition-transform hover:scale-105 hover:text-[#4A4A4A] sm:p-3"
            aria-label="Previous"
          >
            <HiOutlineArrowSmallLeft />
          </button>
        </div>

        {/* 2. RIGHT STATIC GRAY BOX + BUTTON */}
        {/* Height reduced to 280px */}
        <div className="absolute top-1/2 right-2 z-0 flex h-[280px] w-[40%] -translate-y-1/2 items-center justify-end rounded-2xl bg-[#31313180] px-2 sm:right-4 sm:px-6 md:px-12">
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-yellow hover:bg-yellow transform rounded-xl bg-[#4A4A4A] p-3 text-xl transition-transform hover:scale-105 hover:text-[#4A4A4A] sm:p-3"
            aria-label="Next"
          >
            <HiOutlineArrowSmallRight />
          </button>
        </div>

        {/* 3. THE CENTER SLIDER */}
        {/* Reduced max-widths for a slightly more compact card */}
        <div className="font-made relative z-10 w-full max-w-[280px] overflow-hidden rounded-2xl bg-[#313131] shadow-2xl sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px]">
          <SliderComponent ref={sliderRef} {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="focus:outline-none">
                {/* Height reduced to 350px, adjusted padding */}
                <div className="flex h-[350px] flex-col items-center justify-center p-6 sm:p-10">
                  {/* Reduced bottom margin of quote icon from mb-11 to mb-6 */}
                  <LuQuote className="text-yellow mb-6 text-3xl sm:text-4xl" />

                  {/* Adjusted text sizing to fit new height better */}
                  <p className="font-made mb-6 text-center text-sm leading-relaxed text-white sm:text-base md:text-lg">
                    {item.quote}
                  </p>

                  <div className="mt-auto text-center">
                    <h4 className="font-made text-sm font-semibold tracking-wider text-white">
                      {item.author}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </SliderComponent>
        </div>
      </div>
    </section>
  );
}
