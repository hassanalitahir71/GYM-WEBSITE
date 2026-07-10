import HeroSection from "../components/HeroSection"
import FreeSetion from "../components/FreeSetion";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import TestimonialSlider from "../components/TestimonialSlider";
import VisionMissionSection from "../components/VisionMissionSection";



function AboutUs() {
  return (
    <div className="bg-black">
      <HeroSection page="AboutUs" />
      <Paragraph AboutUs={true} />
      <VisionMissionSection/>
      <TestimonialSlider/>
      <FreeSetion pic={true} color={false} />
      <Footer />
    </div>
  );
}

export default AboutUs
