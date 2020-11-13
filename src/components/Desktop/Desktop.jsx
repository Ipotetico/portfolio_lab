import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import DataAfterLogin from "./AfterLogin/Datas/DataAfterLogin";
import HeaderFourSteps from "../Desktop/AfterLogin/HeaderAfterLogin/HeaderFourSteps";
import StuffForm from "./AfterLogin/StuffForm";
import ContactUs from "./Contact/ContactUs";
import Data from "./Datas/Data";
import FourSteps from "./FourSteps/FourSteps";
import FourStepsGraphics from "./FourSteps/FourStepsGraphics";
import GiveAway from "./GiveAway/GiveAway";
import Header from "./Header/Header";
import SignUp from "./Registration/SignUp";
import WeHelp from "./WeHelp/WeHelp";
import WeHelpButtons from "./WeHelp/WeHelpButtons";
import WeHelpContainer from "./WeHelp/WeHelpContainer";

const Desktop = () => {
  const [showData, setShowData] = useState(0);
  const [signUp, setSignUp] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleShowData = (number) => {
    setShowData(number);
  };

  const handleShowSignup = () => {
    setSignUp(!signUp);
  };

  const handleIsLogged = () => {
    setIsLogged(!isLogged);
    setSignUp(!signUp);
  };
  return (
    <>
      {signUp && <SignUp isLogged={handleIsLogged} />}
      <div className="desktop--main">
        <Router>
          {isLogged ? <HeaderFourSteps /> : <Header func={handleShowSignup} />}
          {!isLogged && <Data />}
          {isLogged ? (
            <StuffForm />
          ) : (
            <div>
              <FourSteps />
              <FourStepsGraphics />
              <div id="onas">
                <GiveAway func={handleShowSignup} />
              </div>
              <AboutUs />

              <div id="help">
                <WeHelp />
              </div>
              <WeHelpButtons handleShowData={handleShowData} />
              <WeHelpContainer showData={showData} />
            </div>
          )}
          <div id="contact">
            <ContactUs />
          </div>
        </Router>
      </div>
    </>
  );
};

export default Desktop;
