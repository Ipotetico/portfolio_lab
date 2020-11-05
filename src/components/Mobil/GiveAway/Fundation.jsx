import React from "react";

const Fundation = ({ fundation }) => {
  return (
    <div className="fundation">
      <label htmlFor={fundation}>
        <input type="checkbox" name="" id={fundation} hidden />
        <span>{fundation}</span>
      </label>
    </div>
  );
};

export default Fundation;
