import React from "react";

const SideDrawer = ({ state }) => (
  <nav
    className="side-drawer"
    style={{ transform: state ? "translateX(0)" : "translateX(-150%)" }}
  >
    <ul className="login--list">
      <li>
        <a href="/">Zaloguj</a>
      </li>
      <li>
        <a href="/">Załóz konto</a>
      </li>
    </ul>
    <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
    <ul className="menu--list">
      <li>
        <a href="/">O co chodzi?</a>
      </li>
      <li>
        <a href="/">O nas</a>
      </li>
      <li>
        <a href="/">Fundacja i organizacje</a>
      </li>
      <li>
        <a href="/">Kontakt</a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
