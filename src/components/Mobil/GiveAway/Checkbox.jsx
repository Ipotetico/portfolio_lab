import React from "react";

const Checkbox = ({ id, text, name, handleStepOne }) => {
  return (
    <form className="group">
      <input
        onChange={(e) => handleStepOne(e)}
        type="checkbox"
        id={id}
        name={name}
      />
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
    </form>
  );
};

export default Checkbox;
