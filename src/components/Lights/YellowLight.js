import React from "react";

const YellowLight = ({ light, timeLight }) => {
  timeLight(3);
  return (
    <>
      <div
        style={{
          backgroundColor: light === 2 || light === 4 ? "orangered" : "#222222",
        }}
        className="light"
      ></div>
    </>
  );
};
export default YellowLight;
