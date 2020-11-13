import React from "react";

export const Square = ({ h1, span }) => {
  return (
    <div className="square">
      <h2>{h1}</h2>
      {span}
    </div>
  );
};

export default Square;
