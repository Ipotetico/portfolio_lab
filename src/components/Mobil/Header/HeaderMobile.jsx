import React from "react";
import Parzenica from "../GiveAway/Parzenica";
import DrawerToggleButton from "../SideDrawer/SideDrawerButton";

const HeaderMobile = ({ func, state }) => {
  return (
    <>
      <header className="container desktop">
        <img
          src={process.env.PUBLIC_URL + "/img/misio_sam_mobile.png"}
          alt="misio"
        />
        <div className="box two--vertical">
          <h1>
            Zacznij <br /> pomagać!
          </h1>
          <Parzenica />
        </div>
        <DrawerToggleButton func={func} state={state} />
      </header>
    </>
  );
};
export default HeaderMobile;
