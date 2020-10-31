import React from "react";
import Carousel from "react-elastic-carousel";
import Icon from "../IconSJX/Icon";

const Help = () => {
  return (
    <>
      <div className="container help">
        <div className="three--steps">
          <h2>Komu pomagamy?</h2>
          <img
            src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
            alt="parzenica"
          />
          <Carousel>
            <Icon
              icon={process.env.PUBLIC_URL + "/img/fundacje.svg"}
              alt="fundacje"
            />
            <Icon icon={process.env.PUBLIC_URL + "/img/ngo.svg"} alt="ngo" />
            <Icon
              icon={process.env.PUBLIC_URL + "/img/lokalsi.svg"}
              alt="zbiórki lokalne"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Help;
