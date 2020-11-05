import React, { useState } from "react";
import FirstStep from "./FirstStep";
import Parzenica from "./Parzenica";
import SecondStep from "./SecondStep";
import Steps from "./Steps";
import ThirdStepA from "./ThirdStepA";
import ThirdStepB from "./ThirdStepB";

const GiveAway = () => {
  const [step, setStep] = useState(1);
  console.log(`step ${step}`);

  const handleSetStep = (number) => {
    setStep(number);
  };
  return (
    <>
      <div className="container give--away">
        <div className="header">
          <h2>
            Oddaj POTRZEBUJĄCYM rzeczy, <br />
            których nie potrzebujesz
          </h2>
          <Parzenica />
          <h3>Wystarczą 4 proste kroki</h3>
        </div>
        <Steps handleSetStep={handleSetStep} step={step} />
        {step === 1 && <FirstStep handleSetStep={handleSetStep} />}
        {step === 2 && <SecondStep handleSetStep={handleSetStep} />}
        {step === 3 && <ThirdStepA handleSetStep={handleSetStep} />}
        {step === 4 && <ThirdStepB handleSetStep={handleSetStep} />}
      </div>
    </>
  );
};

export default GiveAway;
