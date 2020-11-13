import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "./Button";
import Headline from "./Headline";
import MenuItem from "./MenuItem";

const Header = ({ func }) => {
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

              <MenuItem name="Zaloguj" clasa="menu petite" linkTo="#" />
              <MenuItem
                func={func}
                name="Załóż konto"
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
                <Button func={func} text="oddaj rzeczy" />
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
