import React from "react";
import parzenica from "../img/parzenica.svg";

const Parzenica = ({ title_one, title_two }) => {
  return (
    <div className="little--box">
      <h1>{title_one}</h1>
      <h1>{title_two}</h1>
      <img src={parzenica} alt="parzenica" />
    </div>
  );
};

export default Parzenica;
