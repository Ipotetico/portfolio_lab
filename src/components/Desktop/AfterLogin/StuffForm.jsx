import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import Button from "../Header/Button";
import BoxStepTwo from "./SelectBoxes/BoxStepTwo";
import BoxStepOne from "./SelectBoxes/BoxStepOne";
import HelpWhome from "./HelpWhome";
import DataAfterLogin from "./Datas/DataAfterLogin";
import BoxAddress from "./SelectBoxes/BoxAddress";
import BoxSummary from "./SelectBoxes/BoxSummary";

const StuffForm = ({ func }) => {
  const [formula, setFormula] = useState(1);
  const [stepOne, setStepOne] = useState([]);
  const [numberOfBags, setNumberOfBags] = useState(0);
  const [location, setLocation] = useState('');
  const [whomeYouHelp, setWhomeYouHelp] = useState([]);
  const [stuffToGive, setStuffToGive] = useState([]);

  const [resumeStuff, setResumeStuff] = useState([]);

  useEffect(() => {
    setResumeStuff(() => [
      `${numberOfBags} worków: ${[...stepOne]} ${[
        ...whomeYouHelp,
      ]} z ${location}go`,
    ]);
  }, [numberOfBags, stepOne]);

  console.log(resumeStuff);

  const handleAdd = () => {
    if (formula < 5) {
      setFormula(() => formula + 1);
    }
  };
  const handleSubtr = () => {
    if (formula > 1) {
      setFormula(() => formula - 1);
    }
  };

  const handleStepOne = (e) => {
    setStepOne((prev) => [...prev, e.target.name]);
  };

  const handleStepTwo = (quant) => {
    setNumberOfBags(quant);
  };

  const handleStepThree = (choose) => {
    setLocation(choose);
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
          <h1>{formula < 5 ? `Krok ${formula}/4` : ""}</h1>
          {formula === 1 && (
            <BoxStepOne
              handleAdd={handleAdd}
              handleSubtr={handleSubtr}
              formula={formula}
              handleStepOne={handleStepOne}
            />
          )}
          {formula === 2 && (
            <BoxStepTwo
              handleAdd={handleAdd}
              handleSubtr={handleSubtr}
              formula={formula}
              handleStepTwo={handleStepTwo}
            />
          )}
          {formula === 3 && (
            <HelpWhome
              handleAdd={handleAdd}
              handleSubtr={handleSubtr}
              formula={formula}
              handleStepThree={handleStepThree}
            />
          )}
          {formula === 4 && (
            <BoxAddress
              handleAdd={handleAdd}
              handleSubtr={handleSubtr}
              formula={formula}
              handleStepThree={handleStepThree}
            />
          )}
          {formula === 5 && (
            <BoxSummary
              handleAdd={handleAdd}
              handleSubtr={handleSubtr}
              formula={formula}
              data={resumeStuff}
              numberOfBags={numberOfBags}
              location={location}
              stuffToGive={stuffToGive}
              stepOne={[...stepOne]}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default StuffForm;
