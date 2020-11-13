import React, { useState } from "react";
import Button from "../Header/Button";
import BoxStepTwo from "./SelectBoxes/BoxStepTwo";
import BoxStepOne from "./SelectBoxes/BoxStepOne";
import HelpWhome from "./HelpWhome";
import DataAfterLogin from "./Datas/DataAfterLogin";

const StuffForm = ({ func }) => {
  const [formula, setFormula] = useState(1);

  console.log(formula);

  const handleAdd = () => {
    if (formula < 4) {
      setFormula(() => formula + 1);
    }
  };
  const handleSubtr = () => {
    if (formula > 1) {
      setFormula(() => formula - 1);
    }
  };
  return (
    <>
      <DataAfterLogin formula={formula} />
      <div className="desktop--desktop stuff">
        <img
          className="desktop--picture bear"
          src={process.env.PUBLIC_URL + "/img/misio_sam.png"}
          alt="home hero"
        />
        <div className="desktop--container">
          <h1>Krok {formula}/4</h1>
          {formula === 1 && <BoxStepOne />}
          {formula === 2 && <BoxStepTwo />}
          {formula === 3 && <HelpWhome />}
          <div className="buttons">
            {formula > 1 && <Button func={handleSubtr} text="Cofnij" />}
            {formula < 4 && <Button func={handleAdd} text="Dalej" />}
          </div>
        </div>
      </div>
    </>
  );
};
export default StuffForm;
