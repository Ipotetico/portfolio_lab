import React, { useState } from "react";
import Collection from "./Collect/Collection";
import Contact from "../Mobil/Contact/Contact";
import FourSteps from "../Mobil/FourSteps/FourSteps";
import HeaderMobile from "../Mobil/Header/HeaderMobile";
import Help from "../Mobil/Help/Help";
import OpenAccount from "./Account/OpenAccount";
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
