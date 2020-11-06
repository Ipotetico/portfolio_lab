import React from "react";
import Button from "./Button";
import Headline from "./Headline";

const Header = () => {
  return (
    <>
      <div className="desktop--desktop">
        <img
          className="desktop--picture"
          src={process.env.PUBLIC_URL + "/img/Home-Hero-Image.jpg"}
          alt="home hero"
        />
        <div className="desktop--container">
          <div className="header--container">
            <nav>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <a className="menu petite" href="">
                Zaloguj
              </a>
              <a className="menu petite" href="">
                Załóż konto
              </a>
              <a className="menu grande" href="">
                Start
              </a>
              <a className="menu grande" href="">
                O co chodzi?
              </a>
              <a className="menu grande" href="">
                O nas
              </a>
              <a className="menu grande" href="">
                Fundacja i organizacje
              </a>
              <a className="menu grande" href="">
                Kontakt
              </a>
            </nav>
            <div className="center--container">
              <Headline
                headline={
                  <h1>
                    Zacznij pomagać! <br />
                    Oddaj niechciane rzeczy w zaufane ręce
                  </h1>
                }
              />
              <div className="buttons--container">
                <Button text="oddaj rzeczy" />
                <Button text="zorganizuj zbiórkę" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
