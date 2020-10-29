import React from "react";
import bgd from "../img/misio_sam_mobile.png";
import parzenica from "../img/parzenica.svg";
import DrawerToggleButton from "./SideDrawer/SideDrawerButton";

const HeaderMobile = ({ func, state }) => {
  return (
    <>
      <header className="container desktop">
        <img src={bgd} alt="" />
        <div className="box two--vertical">
          <h1>
            Zacznij <br /> pomagać!
          </h1>
          <img src={parzenica} alt="" />
        </div>
        <DrawerToggleButton func={func} state={state} />
      </header>
    </>
  );
};
export default HeaderMobile;
