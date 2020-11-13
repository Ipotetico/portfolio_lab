import React from "react";
import SelectBox from "../SelectBoxComponents/SelectBox";

export const BoxStepTwo = () => {
  return (
    <>
      <div className="input--container">
        <h1 style={{ fontWeight: 600 }} className="input--headline--">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </h1>
        <SelectBox />
      </div>
    </>
  );
};

export default BoxStepTwo;
