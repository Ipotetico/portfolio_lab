import React, { useState, useEffect } from "react";

export const VoivodshipsBox = ({ array, handleStepThree }) => {
  const [choose, setChoose] = useState("— wybierz —");
  console.log("choose", choose);

  const handleChoose = (e) => {
    setChoose(e.target.innerText);
  };

  useEffect(() => {
    handleStepThree(choose);
  }, [choose]);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown--select">
          <span className="select">{choose}</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <ul className="dropdown--list woj">
          {array.map((el) => (
            <li
              className="item"
              onClick={handleChoose}
              key={el.id}
              value={el.woj}
              name={el.dop}
            >
              {el.woj}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VoivodshipsBox;
