import HeroSection from "../components/HeroSection"
import FreeSetion from "../components/FreeSetion";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import TestimonialSlider from "../components/TestimonialSlider";
import VisionMissionSection from "../components/VisionMissionSection";
import ProgressBar from "../components/ProgressBar";




function AboutUs() {
  return (
    <div className="bg-black">
      <HeroSection page="AboutUs" />
      <Paragraph AboutUs={true} />
      <VisionMissionSection/>
     <ProgressBar/>
      <TestimonialSlider/>
      <FreeSetion pic={true} color={false} />
      <Footer />
    </div>
  );
}

export default AboutUs
