import React from "react";

const Steps = ({ handleSetStep, step }) => {
  return (
    <>
      <div className="steps">
        <div
          onClick={() => handleSetStep(1)}
          className={step === 1 ? "circle checked" : "circle"}
        >
          1
        </div>
        <div
          onClick={() => handleSetStep(2)}
          className={step === 2 ? "circle checked" : "circle"}
        >
          2
        </div>
        <div
          onClick={() => handleSetStep(3)}
          className={step === 3 || step === 4 ? "circle checked" : "circle"}
        >
          3
        </div>
        <div
          onClick={() => handleSetStep(4)}
          className={step === 5 ? "circle checked" : "circle"}
        >
          4
        </div>
        <div className="circle">
          <i className="fas fa-check"></i>
        </div>
      </div>
    </>
  );
};

export default Steps;
