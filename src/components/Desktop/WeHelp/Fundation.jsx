import React from "react";

const Fundation = ({ name, need, goal }) => {
  return (
    <div className="fundation--container">
      <h2>Fundacja "{name}"</h2>
      <div className=""></div>
      <p className="goals">{goal}</p>
      <p className="need">{need}</p>
    </div>
  );
};

export default Fundation;
