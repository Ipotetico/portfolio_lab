import React, { useState, useEffect } from "react";
import wojewodztwa from "../../../Data/json/wojewodztwa.json";
import VoivodshipsBox from "../VoivodshipsBox";

const BoxStepThree = ({ handleStepThree }) => {
  return (
    <VoivodshipsBox handleStepThree={handleStepThree} array={wojewodztwa} />
  );
};

export default BoxStepThree;
