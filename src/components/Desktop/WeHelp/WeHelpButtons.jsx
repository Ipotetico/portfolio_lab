import React from "react";
import Button from "../Header/Button";

const WeHelpButtons = () => {
  return (
    <div className="center--container we--help--buttons">
      <div className="buttons--container">
        <Button text="Fundacjom" />
        <Button
          text={
            <p>
              Organizacjom <br /> pozarządowym
            </p>
          }
        />
        <Button
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
