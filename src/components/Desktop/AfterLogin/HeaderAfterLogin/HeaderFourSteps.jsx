import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Headline from "../../../Desktop/Header/Headline";
import MenuItem from "../../../Desktop/Header/MenuItem";
import Square from "../../AfterLogin/SelectBoxComponents/Square";

const HeaderFourSteps = ({ func }) => {
  return (
    <>
      <div className="desktop--desktop">
        <img
          className="desktop--picture form"
          src={process.env.PUBLIC_URL + "/img/Form-Hero-Image.jpg"}
          alt="form hero"
        />
        <div className="desktop--container">
          <div className="header--container">
            <nav>
              <div className=""></div>
              <div className=""></div>
              <MenuItem name="@mail" clasa="menu petite" linkTo="#" />

              <MenuItem
                name="Oddaj rzeczy"
                clasa="menu petite active"
                linkTo="#"
              />
              <MenuItem
                func={func}
                name="Wyloguj"
                clasa="menu petite"
                linkTo="#"
              />
              <Router>
                <Link className="menu grande" smooth to="/">
                  Start
                </Link>
                <Link className="menu grande" smooth to="/">
                  O co chodzi?
                </Link>
                <Link className="menu grande" smooth to="/pathLink#onas">
                  O nas
                </Link>
                <Link className="menu grande" smooth to="/pathLink#help">
                  Fundacje i organizacje
                </Link>
                <Link className="menu grande" smooth to="/pathLink#contact">
                  Kontakt
                </Link>
              </Router>
            </nav>

            <div className="center--container after--login">
              <Headline
                headline={
                  <h1>
                    Oddaj rzeczy, których już nie chcesz <br />
                    POTRZEBUJĄCYM
                  </h1>
                }
              />

              <h1 className="subheadline">Wystarczą 4 proste kroki:</h1>
              <div className="box--for--four">
                <Square
                  h1="1"
                  span={
                    <span>
                      Wybierz <br /> rzeczy
                    </span>
                  }
                />
                <Square
                  h1="2"
                  span={
                    <span>
                      Spakuj je <br /> w worki
                    </span>
                  }
                />
                <Square
                  h1="3"
                  span={
                    <span>
                      Wybierz <br /> fundację
                    </span>
                  }
                />
                <Square
                  h1="4"
                  span={
                    <span>
                      Zamów <br /> kuriera
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderFourSteps;
