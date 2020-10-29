import React, { useState } from "react";
import FourSteps from "./FourSteps";
import HeaderMobile from "./HeaderMobile";
import Help from "./Help";
import OpenAccount from "./OpenAccount";
import SideDrawer from "./SideDrawer/SideDrawer";

const Mobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log(drawerOpen);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <HeaderMobile func={handleDrawerOpen} state={drawerOpen} />
      <SideDrawer state={drawerOpen} />
      <OpenAccount />
      <FourSteps />
      <Help />
    </>
  );
};
export default Mobile;
