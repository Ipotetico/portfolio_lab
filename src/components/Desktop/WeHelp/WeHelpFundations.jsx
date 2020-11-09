import React from "react";
import Fundation from "./Fundation";
import fundations from "./Data/fundations.json";

console.log(fundations);

const WeHelpFundations = () => {
  return (
    <div className="center--container fundations--container">
      {fundations.map((el) => {
        return <Fundation name={el.name} goal={el.goal} need={el.need} />;
      })}
    </div>
  );
};

export default WeHelpFundations;
