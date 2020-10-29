import React from "react";

const DrawerToggleButton = ({ func, state }) => (
  <button
    onClick={func}
    style={{ transform: state ? "rotate(90deg)" : "rotate(0deg)" }}
    className="toggle-button"
  >
    <i className="fas fa-bars"></i>
  </button>
);

export default DrawerToggleButton;
