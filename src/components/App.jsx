import React from "react";
import { isMobileOnly, isTablet, isBrowser } from "react-device-detect";
import "./css/App.css";
import Mobile from "./Mobil/Mobile";
import Tablet from "./Tablet/Tablet";
import Desktop from "./Desktop/Desktop";

function App() {
  const renderContent = () => {
    if (isMobileOnly) {
      return <Mobile />;
    }
    if (isTablet) {
      return <Tablet />;
    }
    if (isBrowser) {
      return <Desktop />;
    }
  };

  return renderContent();
}

export default App;
