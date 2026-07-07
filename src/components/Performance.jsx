import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Performance = () => {
    const LogoList = [
  { id: 1, img: "/img/brand1.png" },
  { id: 2, img: "/img/brand2.png" },
  { id: 3, img: "/img/brand3.png" },
  { id: 4, img: "/img/brand4.png" },
  { id: 5, img: "/img/brand5.png" },
];
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center mt-7 px-4">
        <div className="flex w-[90%] flex-col items-center justify-center gap-4 sm:w-[85%] lg:w-[89%]">
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:w-[80%] lg:w-[50%]">
            <h1 className="text-yellow text-center text-base font-semibold sm:text-lg lg:text-[25px]">
              POWERED BY PERFORMANCE
            </h1>

            <p className="font-made text-center text-sm leading-6 text-white sm:text-base lg:text-[15px] lg:leading-5">
              WE COLLABORATE WITH INDUSTRY-LEADING BRANDS TO BRING YOU THE BEST
              IN FITNESS, PERFORMANCE, AND INNOVATION
            </p>
          </div>

          <div className="relative w-full m-8  bg-black py-4 sm:py-2">
            {/* Left Fade */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>

            {/* Right Fade */}
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>

            <Swiper
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              loop
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="logoSwiper"
            >
              {[...LogoList, ...LogoList].map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`}>
                  <div className="flex h-full items-center justify-center p-4 sm:p-8">
                    <img
                      src={item.img}
                      alt={`brand-${item.id}`}
                      className="max-h-8 object-contain brightness-0 invert sm:max-h-20"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
