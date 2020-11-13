import React from "react";

const ButtonSubmit = ({ text, disabled, reset }) => {
  return (
    <button onClick={reset} type="submit" className="btn" disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonSubmit;
