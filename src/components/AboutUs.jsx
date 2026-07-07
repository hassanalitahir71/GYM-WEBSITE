function AboutUs() {
  return (
    <>
      <div className="mx-auto mt-8 mb-20 flex w-[90%] flex-col items-center justify-center gap-4 py-12 sm:w-[85%] lg:w-[70%] lg:gap-10 lg:py-20">
        {/* Section Heading */}
        <h1 className="text-yellow font-made text-3xl font-medium sm:text-4xl lg:text-[40px]">
          About Us
        </h1>

        {/* Section Description */}
        <p className="text-center  font-made text-xl leading-8 text-white sm:text-3xl sm:leading-12 lg:text-[42px] lg:leading-12">
          At <span className=" font-made text-yellow">IronForge</span>, we believe fitness
          is more than lifting weights it's about building discipline,
          confidence, and a stronger version of yourself.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
