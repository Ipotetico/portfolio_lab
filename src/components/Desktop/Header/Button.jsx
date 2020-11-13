import React from "react";

const Button = ({ text, handleShowData, number, func }) => {
  return (
    <button onClick={func} className="btn">
      {text}
    </button>
  );
};

export default Button;
