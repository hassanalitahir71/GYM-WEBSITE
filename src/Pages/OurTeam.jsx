import HeroSection from "../components/HeroSection"
import FreeSetion from "../components/FreeSetion";
import Footer from "../components/Footer";


function OurTeam() {
  return (
    <>
      <div className="bg-black">
        <HeroSection page="OurTeam" />
        <FreeSetion pic={true} color={true} />
        <Footer />
      </div>
    </>
  );
}

export default OurTeam
