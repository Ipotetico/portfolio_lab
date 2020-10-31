import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container contact">
        <h2>skontaktuj się z nami</h2>
        <img
          src={process.env.PUBLIC_URL + "/img/parzenica_white.svg"}
          alt="parzenica biała"
        />
        <div className="social--media">
          <img src={process.env.PUBLIC_URL + "/img/phone.svg"} alt="phone" />
          <img src={process.env.PUBLIC_URL + "/img/mail.svg"} alt="mail" />
          <img
            src={process.env.PUBLIC_URL + "/img/twitter.svg"}
            alt="twitter"
          />
          <img src={process.env.PUBLIC_URL + "/img/fb.svg"} alt="facebook" />
          <img src={process.env.PUBLIC_URL + "/img/ig.svg"} alt="instagram" />
        </div>
        <img
          style={{ transform: "rotate(180deg)" }}
          src={process.env.PUBLIC_URL + "/img/parzenica_white.svg"}
          alt="parzenica biała"
        />
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
