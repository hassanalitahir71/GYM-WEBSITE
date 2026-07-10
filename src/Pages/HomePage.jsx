import Paragraph from "../components/Paragraph"
import HeroSection from "../components/HeroSection"
import Performance from "../components/Performance"
import OurServices from "../components/OurServices"
import MembershipPlans from "../components/MembershipPlans"
import FreeSetion from "../components/FreeSetion"
import Footer from "../components/Footer"


export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection page="HomePage" />
      <Paragraph HomePage={true}/>
      <Performance/>
      <OurServices />
      <MembershipPlans/>
      <FreeSetion pic={false} color={true} />
      <Footer/>

    </div>
  )
}
