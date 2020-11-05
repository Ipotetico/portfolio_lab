import React from "react";

const Onas = () => {
  return (
    <div className="container onas">
      <div className="people">
        <img src={process.env.PUBLIC_URL + "/img/People.jpg"} alt="" />
      </div>
      <h2>o nas</h2>
      <img
        className="parzenica"
        src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
        alt=""
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, et
        autem tempora quaerat ipsam ad voluptatibus nostrum dolore similique
        dicta pariatur quae beatae. A, nulla laudantium? Sit nulla id neque.
      </p>
      <img
        className="signature"
        src={process.env.PUBLIC_URL + "/img/signature.svg"}
        alt=""
      />
    </div>
  );
};

export default Onas;
