import React, { useState, useEffect } from "react";

const SelectBox = ({ handleStepTwo }) => {
  const [quant, setQuant] = useState("— wybierz —");

  let numbers = [];

  for (let i = 1; i <= 10; i++) {
    numbers.push([i]);
  }

  const handleQuant = (e) => {
    setQuant("");
    setQuant(e.target.innerText);
  };

  useEffect(() => {
    handleStepTwo(quant);
  }, [quant]);

  console.log("quant", quant);
  console.log("handle stap two", handleStepTwo);

  return (
    <div className="dropdown">
      <div className="dropdown--select">
        <span className="select">{quant}</span>
        <i className="fas fa-angle-down"></i>
      </div>
      <ul className="dropdown--list">
        {numbers.map((el, index) => (
          <li onClick={handleQuant} key={index} name={el} className="item">
            {el}
          </li>
        ))}
        <li onClick={handleQuant} name="ponad" className="item">
          &gt;10
        </li>
      </ul>
    </div>
  );
};

export default SelectBox;
