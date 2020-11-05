import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Steps from "./Steps";
import ThirdStep_A from "./ThirdStep_A";
import ThirdStep_B from "./ThirdStep_B";

const GiveAway = () => {
  const [step, setStep] = useState(4);
  console.log(`step ${step}`);

  const handleSetStep = (number) => {
    setStep(number);
  };
  return (
    <>
      <div className="container give--away">
        <div className="header">
          <h2>
            Oddaj rzeczy, <br />
            których już nie chcesz POTRZEBUJĄCYM
          </h2>
          <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
          <h3>Wystarczą 4 proste kroki</h3>
        </div>
        <Steps handleSetStep={handleSetStep} step={step} />
        {step === 1 && <FirstStep handleSetStep={handleSetStep} />}
        {step === 2 && <SecondStep handleSetStep={handleSetStep} />}
        {step === 3 && <ThirdStep_A handleSetStep={handleSetStep} />}
        {step === 4 && <ThirdStep_B handleSetStep={handleSetStep} />}
      </div>
    </>
  );
};

export default GiveAway;
