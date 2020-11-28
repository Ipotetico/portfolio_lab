import React, { useState } from "react";
import Checkbox from "../../../Mobil/GiveAway/Checkbox";
import Button from "../../Header/Button";

export const BoxStepOne = ({
  handleStepOne,
  formula,
  handleAdd,
  handleSubtr,
}) => {
  return (
    <>
      <div className="input--container">
        <h1 style={{ fontWeight: 600 }} className="input--headline--">
          Zaznacz co chcesz oddać:
        </h1>
        <Checkbox
          handleStepOne={handleStepOne}
          id="clothes"
          text="ubrania, które nadają się do ponownego użycia"
          name=" ubrań w dobrym stanie"
        />
        <Checkbox
          handleStepOne={handleStepOne}
          id="rugs"
          text="ubrania, do wyrzucenia"
          name=" ubrań do wyrzucenia"
        />
        <Checkbox
          handleStepOne={handleStepOne}
          id="toys"
          text="zabawki"
          name=" zabawek"
        />
        <Checkbox
          handleStepOne={handleStepOne}
          id="books"
          text="książki"
          name=" książek"
        />
        <Checkbox
          handleStepOne={handleStepOne}
          id="others"
          text="inne"
          name=" innych"
        />
      </div>
      <div className="buttons">
        {formula > 1 && (
          <Button
            formula={formula}
            type="submit"
            func={handleSubtr}
            text="Cofnij"
          />
        )}
        {formula < 4 && (
          <Button
            formula={formula}
            type="submit"
            func={handleAdd}
            text="Dalej"
          />
        )}
      </div>
    </>
  );
};

export default BoxStepOne;
