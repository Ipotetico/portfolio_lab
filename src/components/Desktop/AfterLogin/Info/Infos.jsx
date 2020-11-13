import React from "react";

export const Infos = ({ headline, info }) => {
  return (
    <>
      <div className="infos">
        <h1>{headline}</h1>
        <p>{info}</p>
      </div>
    </>
  );
};

export default Infos;
