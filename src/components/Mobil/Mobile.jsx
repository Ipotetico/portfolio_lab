import React, { useState } from "react";
import Collection from "./Collection";
import Contact from "./Contact";
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
      <Collection />
      <Contact />
    </>
  );
};
export default Mobile;
