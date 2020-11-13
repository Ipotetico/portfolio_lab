import React from "react";

export const VoivodshipsBox = ({ array, func, data }) => {
  return (
    <>
      <div className="dropdown">
        <div className="dropdown--select">
          <span className="select">{data}</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <ul className="dropdown--list woj">
          {array.map((el) => (
            <li onClick={func} key={el.id} value={`${el.woj}`} className="item">
              {el.woj}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VoivodshipsBox;
