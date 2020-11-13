import React from "react";
import Headline from "../Header/Headline";

const SignUp = ({ isLogged }) => {
  return (
    <>
      <div className="modal---desktop">
        <Headline headline={<h1>Załóż konto</h1>} />
        <div className="container">
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <p>Hasło</p>
            <input type="password" name="password" id="password" />
          </label>
          <label htmlFor="rep">
            <p>Powtórz hasło</p>
            <input type="password" name="rep" id="rep" />
          </label>
        </div>
        <div className="buttons--container">
          <span className="span">Zaloguj się</span>
          <span onClick={isLogged} className="span  active">
            Załóż konto
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
