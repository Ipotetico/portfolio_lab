import React, { useState } from "react";
import wojewodztwa from "../../../Data/json/wojewodztwa.json";
import VoivodshipsBox from "../VoivodshipsBox";

const BoxStepThree = () => {
  const [choose, setChoose] = useState("— wybierz —");

  const handleChoose = (e) => {
    setChoose(e.target.innerHTML);
  };
  return (
    <VoivodshipsBox array={wojewodztwa} func={handleChoose} data={choose} />
  );
};

export default BoxStepThree;
