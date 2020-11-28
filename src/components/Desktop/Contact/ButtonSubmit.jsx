import React from "react";

const ButtonSubmit = ({ text, disabled, reset }) => {
  return (
    <button type="submit" className="btn" disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonSubmit;
