import React, { useState, useEffect } from "react";
import Headline from "../Header/Headline";
import fire from "../../Data/UniversalComponents/firebase";
import ButtonSubmit from "./ButtonSubmit";

const ContactUs = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   if (name !== null && email !== null && message !== null) {
  //     setDisabled(false);
  //   }
  // }, [name, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, "name");
    fire
      .firestore()
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        // alert("Message has been submited");
      })
      .catch((error) => {
        // alert(error.message);
      });
    handleReset();
  };

  const handleReset = () => {
    setName(null);
    setEmail(null);
    setMessage(null);
  };

  const handleName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(() => e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(() => e.target.value);
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(() => e.target.value);
  };

  return (
    <>
      <div className="center--container contact--us">
        <div className="fota">
          <img
            className="background"
            src={process.env.PUBLIC_URL + "/img/Background-Contact-Form.jpg"}
            alt="o nas"
          />

          <form onSubmit={handleSubmit} className="contact--form">
            <Headline headline={<h3>Skontaktuj się z nami</h3>} />
            <div className="form">
              <div className="up">
                <label htmlFor="name">
                  <p>Wpisz swoje imię</p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => handleName(e)}
                  />
                </label>
                <label htmlFor="email">
                  <p>Wpisz swój email</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => handleEmail(e)}
                  />
                </label>
              </div>
              <div className="down">
                <label htmlFor="message">
                  <p>Wpisz swoją wiadomość</p>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    onChange={(e) => handleMessage(e)}
                  ></textarea>
                </label>
              </div>
            </div>
            <ButtonSubmit
              reset={handleReset}
              disabled={disabled}
              text="Wyślij"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
