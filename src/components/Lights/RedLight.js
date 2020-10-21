import React from "react";

const RedLight = ({ light, timeLight }) => {
  timeLight(7);
  return (
    <>
      <div
        style={{
          backgroundColor: light === 1 || light === 2 ? "crimson" : "#222222",
        }}
        className="light"
      ></div>
    </>
  );
};
export default RedLight;
