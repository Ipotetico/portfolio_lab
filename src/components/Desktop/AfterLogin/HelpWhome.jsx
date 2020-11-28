import React from "react";
import Button from "../Header/Button";
import BoxStepThree from "./SelectBoxes/BoxStepThree";

export const HelpWhome = ({
  formula,
  handleAdd,
  handleSubtr,
  handleStepThree,
}) => {
  return (
    <>
      <div className="input--container">
        <h1
          style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "0vw" }}
          className="input--headline-- h1"
        >
          Lokalizacja:
        </h1>
        <BoxStepThree handleStepThree={handleStepThree} />
        <h2 style={{ fontWeight: 600 }} className="input--headline-- h2">
          Komu chcesz pomóc?
        </h2>
        <div className="box--poors"></div>
      </div>
      <div className="buttons">
        {formula > 1 && (
          <Button
            formula={formula}
            type="submit"
            func={handleSubtr}
            text="Cofnij"
          />
        )}
        {formula < 4 && (
          <Button
            formula={formula}
            type="submit"
            func={handleAdd}
            text="Dalej"
          />
        )}
      </div>
    </>
  );
};

export default HelpWhome;
