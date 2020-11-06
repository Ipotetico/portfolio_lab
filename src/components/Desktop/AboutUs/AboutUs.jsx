import React from "react";
import Headline from "../Header/Headline";

const AboutUs = () => {
  return (
    <>
      <div className="center--container about--us">
        <div className="container--for--two">
          <div className="text">
            <Headline headline={<h3>O nas</h3>} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              reprehenderit. Quibusdam distinctio neque ipsa quam expedita eum
              aperiam minus? Odit tempore molestias inventore laboriosam enim
              autem optio non eum numquam!
            </p>
            <img
              className="signature"
              src={process.env.PUBLIC_URL + "/img/Signature.svg"}
              alt="signature"
            />
          </div>
          <div className="fota">
            <img src={process.env.PUBLIC_URL + "/img/People.jpg"} alt="o nas" />
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
