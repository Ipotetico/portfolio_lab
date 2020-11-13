import React from "react";

const Checkbox = ({ id, text }) => {
  return (
    <form className="group">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <p>{text}</p>
      </label>
    </form>
  );
};

export default Checkbox;
