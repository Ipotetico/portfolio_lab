import React, { useState } from "react";

const SelectBox = () => {
  const [quant, setQuant] = useState("— wybierz —");

  let numbers = [];

  for (let i = 1; i <= 10; i++) {
    numbers.push([i]);
  }

  const handleQuant = (e) => {
    setQuant(e.target.innerText);
  };

  return (
    <div className="dropdown">
      <div className="dropdown--select">
        <span className="select">{quant}</span>
        <i className="fas fa-angle-down"></i>
      </div>
      <ul className="dropdown--list">
        {numbers.map((el, index) => (
          <li onClick={handleQuant} key={index} value={el} className="item">
            {el}
          </li>
        ))}
        <li onClick={handleQuant} value="ponad" className="item">
          &gt;10
        </li>
      </ul>
    </div>
  );
};

export default SelectBox;
