import React from "react";

const BtnFwrBwd = ({ handleSetStep }) => {
  return (
    <div className="button--container">
      <button
        onClick={() => handleSetStep((prevState) => prevState - 1)}
        className="button"
      >
        cofnij
      </button>
      <button
        onClick={() => handleSetStep((prevState) => prevState + 1)}
        className="button"
      >
        dalej
      </button>
    </div>
  );
};

export default BtnFwrBwd;
