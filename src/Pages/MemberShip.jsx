
import Footer from "../components/Footer";
import FreeSetion from "../components/FreeSetion";
import HeroSection from "../components/HeroSection";
import MembershipPlans from "../components/MembershipPlans";
import ResponsivePricing from "../components/ResponsivePricing";
function MemberShip() {
  return (
    <>
      <div className="bg-black">
        <HeroSection page="MemberShip" />
        <MembershipPlans/>
        <ResponsivePricing/>
        <FreeSetion pic={true} color={true} />
        <Footer />
      </div>
    </>
  );
}

export default MemberShip
