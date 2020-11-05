import React from "react";
import Checkbox from "./Checkbox";
import Info from "./Info";

const FirstStep = ({ handleSetStep }) => {
  return (
    <>
      <Info
        span="WAŻNE!"
        info="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
      />

      <div className="check--list">
        <Checkbox id="clothes" text="ubrania do dalszego użytku" />
        <Checkbox id="rugs" text="ubrania do wyrzucenia" />
        <Checkbox id="toys" text="zabawki" />
        <Checkbox id="books" text="ksiązki" />
        <Checkbox id="other" text="inne" />
      </div>
      <button
        onClick={() => handleSetStep((prevState) => prevState + 1)}
        className="button"
      >
        dalej
      </button>
    </>
  );
};

export default FirstStep;
