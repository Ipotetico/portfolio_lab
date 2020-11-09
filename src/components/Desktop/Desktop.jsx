import React from "react";
import Parzenica from "../Mobil/GiveAway/Parzenica";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./Contact/ContactUs";
import Data from "./Datas/Data";
import FourSteps from "./FourSteps/FourSteps";
import FourStepsGraphics from "./FourSteps/FourStepsGraphics";
import GiveAway from "./GiveAway/GiveAway";
import Header from "./Header/Header";
import WeHelp from "./WeHelp/WeHelp";
import WeHelpButtons from "./WeHelp/WeHelpButtons";
import WeHelpFundations from "./WeHelp/WeHelpFundations";
import WnaszejBazie from "./WeHelp/WnaszejBazie";

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
        <WeHelp />
        <WeHelpButtons />
        <WnaszejBazie />
        <WeHelpFundations />
        <ContactUs />
      </div>
    </>
  );
};

export default Desktop;
