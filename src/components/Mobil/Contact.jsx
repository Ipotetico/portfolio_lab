import React from "react";
import parzenicaWhite from "../img/parzenica_white.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import twitter from "../img/twitter.svg";
import fb from "../img/fb.svg";
import ig from "../img/ig.svg";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h2>skontaktuj się z nami</h2>
        <img src={parzenicaWhite} alt="" />
        <div className="social--media">
          <img src={phone} alt="phone" />
          <img src={mail} alt="mail" />
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={ig} alt="" />
        </div>
        <img src={parzenicaWhite} alt="" />
        <ul>
          <li>
            <a href="">Regulamin</a>
          </li>
          <li>
            <a href="">Polityka prywatności</a>
          </li>
          <li>
            <a href="">Instrukcja jak spakować rzeczy do oddania</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
