import React from "react";

const ButtonHelp = ({ text, handleShowData, number }) => {
  return (
    <button onClick={() => handleShowData(number)} className="btn">
      {text}
    </button>
  );
};

export default ButtonHelp;
