import React from "react";
import parzenica from "../img/parzenica.svg";
import bgd from "../img/Home-Hero-Image.jpg";

const Header = () => {
  return (
    <>
      <div className="container--header">
        <img src={bgd} alt="" className="picture--container" />
        <main className="header--container">
          <header className="header">
            <div className="header--box"></div>
            <div className="header--box">
              <div className="one--row">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <a className="login" href="#">
                  Zaloguj
                </a>
                <a className="login" href="#">
                  Załóz konto
                </a>
              </div>
              <div className="one--row">
                <a className="menu" href="#">
                  Start
                </a>
                <a className="menu" href="#">
                  O co chodzi?
                </a>
                <a className="menu" href="#">
                  O nas
                </a>
                <a className="menu" href="#">
                  Fundacja i organizacje
                </a>
                <a className="menu" href="#">
                  Kontakt
                </a>
              </div>
              <div className="central--box">
                <h1>
                  Zacznij pomagać! <br />
                  Oddaj niechciane rzeczy w zaufane ręce
                </h1>
                <img src={parzenica} alt="" />
              </div>
            </div>
          </header>
        </main>
      </div>
    </>
  );
};
export default Header;
