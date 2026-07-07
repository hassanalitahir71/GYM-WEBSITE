import AboutUs from "../components/AboutUs"
import HeroSection from "../components/HeroSection"
import Performance from "../components/Performance"
import OurServices from "../components/OurServices"
import MembershipPlans from "../components/MembershipPlans"
import FreeSetion from "../components/FreeSetion"


export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <AboutUs/>
      <Performance/>
      <OurServices />
      <MembershipPlans/>
      <FreeSetion/>

    </div>
  )
}
