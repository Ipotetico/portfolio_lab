import React from "react";
import worki from "../img/10_workow.svg";
import organizacje from "../img/5_organizacji.svg";
import zbiorki from "../img/7_zbiorek.svg";

const Data = () => {
  return (
    <div className="data">
      <img src={worki} alt="10 workow" />
      <img src={organizacje} alt="5 organizacji" />
      <img src={zbiorki} alt="7 zbiórek" />
    </div>
  );
};
export default Data;
