import React from "react";
import Button from "../../Header/Button";
import SelectBox from "../SelectBoxComponents/SelectBox";

export const BoxStepTwo = ({
  formula,
  handleAdd,
  handleSubtr,
  handleStepTwo,
}) => {
  return (
    <>
      <div className="input--container">
        <h1 style={{ fontWeight: 600 }} className="input--headline--">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </h1>
        <SelectBox handleStepTwo={handleStepTwo} />
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

export default BoxStepTwo;
