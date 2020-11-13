import React from "react";
import BoxStepThree from "./SelectBoxes/BoxStepThree";

export const HelpWhome = () => {
  return (
    <>
      <div className="input--container">
        <h1
          style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "0vw" }}
          className="input--headline-- h1"
        >
          Lokalizacja:
        </h1>
        <BoxStepThree />
        <h2 style={{ fontWeight: 600 }} className="input--headline-- h2">
          Komu chcesz pomóc?
        </h2>
        <div className="box--poors"></div>
      </div>
    </>
  );
};

export default HelpWhome;
