import React from "react";

const Fundation = ({ name, need, goal, organization }) => {
  return (
    <div className="fundation--container">
      <h2 style={{ textAlign: "left" }}>
        {organization} "{name.substr(0, 20)}"
      </h2>
      <div className=""></div>
      <p className="goals">{goal.substr(0, 100)}</p>
      <p className="need">{need.substr(0, 150)}</p>
    </div>
  );
};

export default Fundation;
