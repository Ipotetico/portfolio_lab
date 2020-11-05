import React from "react";

const Checkbox = ({ id, text }) => {
  return (
    <form className="group">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
    </form>
  );
};

export default Checkbox;
