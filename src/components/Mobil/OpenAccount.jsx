import React from "react";
import parzenica from "../img/parzenica.svg";

const OpenAccount = () => {
  return (
    <>
      <div className="container account">
        <h3>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h3>
        <h2>
          ODDAJ JE POTRZEBUJĄCYM <br />
          <span>- szybko i w zaufane ręce</span>
          <img src={parzenica} alt="" />
        </h2>
        <button className="button">Załóz konto</button>
      </div>
    </>
  );
};

export default OpenAccount;
