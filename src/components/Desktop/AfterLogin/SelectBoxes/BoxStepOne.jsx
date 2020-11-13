import React from "react";
import Checkbox from "../../../Mobil/GiveAway/Checkbox";

export const BoxStepOne = () => {
  return (
    <>
      <div className="input--container">
        <h1 style={{ fontWeight: 600 }} className="input--headline--">
          Zaznacz co chcesz oddać:
        </h1>
        <Checkbox
          id="clothes"
          text="ubrania, które nadają się do ponownego użycia"
        />
        <Checkbox id="rugs" text="ubrania, do wyrzucenia" />
        <Checkbox id="toys" text="zabawki" />
        <Checkbox id="books" text="ksiąki" />
        <Checkbox id="others" text="inne" />
      </div>
    </>
  );
};

export default BoxStepOne;
