import React from "react";
import Parzenica from "../../Mobil/GiveAway/Parzenica";

const Headline = ({ headline }) => {
  return (
    <div className="headline">
      {headline}
      <Parzenica />
    </div>
  );
};

export default Headline;
