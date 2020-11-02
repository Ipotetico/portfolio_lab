import React, { useState } from "react";
import Collection from "./Collect/Collection";
import Contact from "../Mobil/Contact/Contact";
import FourSteps from "../Mobil/FourSteps/FourSteps";
import HeaderMobile from "../Mobil/Header/HeaderMobile";
import Help from "../Mobil/Help/Help";
import AccountSection from "./Account/AccountSection";
import SideDrawer from "./SideDrawer/SideDrawer";
import Registration from "./Registration_Login/Registration";
import Results from "./Results/Results";
import Onas from "./Onas/Onas";

const Mobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("");

  console.log(user);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  const handleCloseCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  const handleCreateAccountDrawer = () => {
    setCreateAccount(!createAccount);
    setDrawerOpen(!drawerOpen);
  };

  const handleSetUser = (user) => {
    setUser(user);
  };

  return (
    <>
      <HeaderMobile func={handleDrawerOpen} state={drawerOpen} />
      <SideDrawer
        drawer={handleDrawerOpen}
        create={handleCreateAccountDrawer}
        state={drawerOpen}
        isLogged={isLogged}
        user={user}
      />
      {createAccount ? (
        <Registration
          account={handleCloseCreateAccount}
          handleSetUser={() => handleSetUser(user)}
        />
      ) : (
        <AccountSection account={handleCreateAccount} />
      )}
      <FourSteps />
      <Help />
      <Collection account={handleCreateAccount} />
      <Onas />
      <Contact />
    </>
  );
};
export default Mobile;
