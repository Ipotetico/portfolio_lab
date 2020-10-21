import React from "react";

const GreenLight = ({ light, timeLight }) => {
  timeLight(5);
  return (
    <>
      <div
        style={{
          backgroundColor: light === 3 ? "yellowgreen" : "#222222",
        }}
        className="light"
      ></div>
    </>
  );
};
export default GreenLight;
