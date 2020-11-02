import React from "react";

const OpenAccount = ({ account }) => {
  return (
    <>
      <div className="container account">
        <h3>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h3>
        <h2>
          ODDAJ JE POTRZEBUJĄCYM <br />
          <span>- szybko i w zaufane ręce</span>
          <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
        </h2>
        <button onClick={account} className="button">
          Załóz konto
        </button>
      </div>
    </>
  );
};

export default OpenAccount;
