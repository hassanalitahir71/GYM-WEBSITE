import { FiArrowUpRight } from "react-icons/fi";

const OurServices = () => {
  const services = [
    {
      title: "PERSONAL TRAINING",
      img: "/img/service1.jpg",
    },
    {
      title: "GROUP CLASSES",
      img: "/img/service2.jpg",
    },
    {
      title: "STRENGTH TRAINING",
      img: "/img/service3.jpg",
    },
    {
      title: "CARDIO TRAINING",
      img: "/img/service4.jpg",
    },
  ];
  return (
    <>
      <div className="flex flex-col  h-screen items-center justify-center gap-4 bg-white px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-18">
        <h2 className="font-made text-[30px] font-semibold text-black">
          Our Services
        </h2>
        <h1 className="font-made text-[40px] font-extrabold text-black">
          FITNESS SOLUTION FOR STRON BODY
        </h1>

        <div className="flex h-85 w-[91%] mt-5  gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative flex-1 overflow-hidden rounded-2xl transition-all duration-500 hover:flex-[2]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <h3 className="font-mona text-yellow text-sm">{item.title}</h3>

                <div className="bg-yellow flex h-7 w-7 scale-0 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-100">
                 <FiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
