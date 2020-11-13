import React, { useState } from "react";
import ButtonHelp from "./ButtonHelp";

const WeHelpButtons = ({ handleShowData }) => {
  return (
    <div className="center--container we--help--buttons">
      <div className="buttons--container">
        <ButtonHelp
          number={1}
          handleShowData={handleShowData}
          text="Fundacjom"
        />
        <ButtonHelp
          number={2}
          handleShowData={handleShowData}
          text={
            <p>
              Organizacjom <br /> pozarządowym
            </p>
          }
        />
        <ButtonHelp
          number={3}
          handleShowData={handleShowData}
          text={
            <p>
              Zbiórkom <br /> lokalnym
            </p>
          }
        />
      </div>
    </div>
  );
};

export default WeHelpButtons;
