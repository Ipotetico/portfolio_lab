import React from "react";
import Button from "../Header/Button";
import Headline from "../Header/Headline";

const ContactUs = () => {
  return (
    <>
      <div className="center--container contact--us">
        <div className="fota">
          <img
            className="background"
            src={process.env.PUBLIC_URL + "/img/Background-Contact-Form.jpg"}
            alt="o nas"
          />

          <div className="contact--form">
            <Headline headline={<h3>Skontaktuj się z nami</h3>} />
            <div className=""></div>
            <Button text="Wyślij" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
