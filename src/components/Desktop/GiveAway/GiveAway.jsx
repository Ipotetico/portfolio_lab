import React from "react";
import Button from "../Header/Button";

const GiveAway = ({ func }) => {
  return (
    <div className="center--container four--steps">
      <Button func={func} text="oddaj rzeczy" />
    </div>
  );
};

export default GiveAway;
