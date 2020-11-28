import React from "react";

const Button = ({ text, handleShowData, number, func, type }) => {
  return (
    <button type={type} onClick={func} className="btn">
      {text}
    </button>
  );
};

export default Button;
