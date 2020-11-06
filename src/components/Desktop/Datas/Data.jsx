import React from "react";
import DataImg from "./DataImg";

// import organizacje from "../img/5_organizacji.svg";
// import zbiorki from "../img/7_zbiorek.svg";

const Data = () => {
  return (
    <div className="data--container">
      <img
        className="data--picture"
        src={process.env.PUBLIC_URL + "/img/tlo_papier.png"}
        alt="tlo papier"
      />
      <div className="datas">
        <DataImg picture="10_workow" />
        <DataImg picture="5_organizacji" />
        <DataImg picture="7_zbiorek" />
      </div>
    </div>
  );
};
export default Data;
