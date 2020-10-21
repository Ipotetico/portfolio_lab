import React, { useState, useEffect } from "react";
import GreenLight from "./GreenLight";
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";

function Lights() {
  const [light, setLight] = useState(1);
  const [time, setTime] = useState(0);

  console.log(`TIME: ${time}`);
  console.log(`LIGHT: ${light}`);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLight((prev) => prev + 1);

      if (light >= 4) {
        setLight(1);
      }
    }, time * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const handleRed = (red) => {
    if (light === 1) {
      setTime(red);
    }
  };

  const handleYellow = (yellow) => {
    if (light === 2 || light === 4) {
      setTime(yellow);
    }
  };

  const handleGreen = (green) => {
    if (light === 3) {
      setTime(green);
    }
  };

  return (
    <>
      <div className="container">
        <RedLight timeLight={handleRed} light={light} />
        <YellowLight timeLight={handleYellow} light={light} />
        <GreenLight timeLight={handleGreen} light={light} />
      </div>
    </>
  );
}

export default Lights;
