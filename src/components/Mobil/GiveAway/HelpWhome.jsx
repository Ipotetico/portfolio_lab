import React from "react";

const HelpWhome = ({ group }) => {
  return (
    <div className="group">
      <label htmlFor={group}>
        <input type="checkbox" name="" id={group} hidden />
        <span>{group}</span>
      </label>
    </div>
  );
};

export default HelpWhome;
