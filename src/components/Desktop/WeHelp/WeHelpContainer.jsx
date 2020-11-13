import React from "react";
import WeHelpCollections from "./WeHelpCollections";
import WeHelpFundations from "./WeHelpFundations";
import WeHelpNGOS from "./WeHelpNGOS";
import WnaszejBazie from "./WnaszejBazie";

const WeHelpContainer = ({ showData }) => {
  return (
    <>
      <WnaszejBazie showData={showData} />
      {showData === 1 && <WeHelpFundations />}
      {showData === 2 && <WeHelpNGOS />}
      {showData === 3 && <WeHelpCollections />}
    </>
  );
};

export default WeHelpContainer;
