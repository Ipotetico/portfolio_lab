import React from "react";
import Carousel from "react-elastic-carousel";
import Icon from "../IconSJX/Icon";

const FourSteps = () => {
  return (
    <>
      <div className="container carousel">
        <img
          src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
          alt="parzenica"
        />
        <button className="button">Wystarczą 4 proste kroki</button>
        <img
          src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
          alt="parzenica"
        />
        <div className="four--steps">
          <div className=""></div>
          <Carousel>
            <Icon
              icon={process.env.PUBLIC_URL + "/img/wybierz_rzeczy.svg"}
              alt="wybierz rzeczy"
            />
            <Icon
              icon={process.env.PUBLIC_URL + "/img/spakuj.svg"}
              alt="spakuj"
            />
            <Icon
              icon={process.env.PUBLIC_URL + "/img/zdecyduj.svg"}
              alt="zdecyduj"
            />
            <Icon
              icon={process.env.PUBLIC_URL + "/img/kurier.svg"}
              alt="kurier"
            />
          </Carousel>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
export default FourSteps;
