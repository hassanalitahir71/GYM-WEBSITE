import HeroSection from "../components/HeroSection"
import FreeSetion from "../components/FreeSetion";
import Footer from "../components/Footer";
import HealthSection from "../components/HealthSection";
import CoreTeam from "../components/CoreTeam";
import ExerciseTeam from "../components/ExerciseTeam";


function OurTeam() {
  return (
    <>
      <div className="bg-black">
        <HeroSection page="OurTeam" />
        <CoreTeam/>
        <ExerciseTeam/>
        <HealthSection/>
        <FreeSetion pic={true} color={true} />
        <Footer />
      </div>
    </>
  );
}

export default OurTeam
