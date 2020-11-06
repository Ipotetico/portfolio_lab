import React from "react";
import Parzenica from "../Mobil/GiveAway/Parzenica";
import AboutUs from "./AboutUs/AboutUs";
import Data from "./Datas/Data";
import FourSteps from "./FourSteps/FourSteps";
import FourStepsGraphics from "./FourSteps/FourStepsGraphics";
import GiveAway from "./GiveAway/GiveAway";
import Header from "./Header/Header";

const Desktop = () => {
  return (
    <>
      <div className="desktop--main">
        <Header />
        <Data />
        <FourSteps />
        <FourStepsGraphics />
        <GiveAway />
        <AboutUs />
      </div>
    </>
  );
};

export default Desktop;
