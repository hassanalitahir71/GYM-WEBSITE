
import "./index.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";

import { Routes, Route } from "react-router-dom";
import OurTeam from "./Pages/OurTeam";
import MemberShip from "./Pages/MemberShip";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/MemberShip" element={<MemberShip/>} />
      </Routes>
    </>
  );
}

export default App;
