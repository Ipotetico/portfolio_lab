import React from "react";
import Checkbox from "./Checkbox";

const FirstStep = ({ handleSetStep }) => {
  return (
    <>
      <div className="info">
        <div className="achtung">!</div>
        <p>
          <span>WAŻNE!</span> <br /> Uzupełnij szczegóły dotyczące Twoich
          rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
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
