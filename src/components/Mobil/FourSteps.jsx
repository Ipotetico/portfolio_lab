import React from "react";
import Carousel from "react-elastic-carousel";
import Icon from "./Icon";
import parzenica from "../img/parzenica.svg";
import wybierz from "../img/wybierz_rzeczy.svg";
import spakuj from "../img/spakuj.svg";
import zdecyduj from "../img/zdecyduj.svg";
import kurier from "../img/kurier.svg";

const FourSteps = () => {
  return (
    <>
      <div className="container carousel">
        <img src={parzenica} alt="" />
        <button className="button">Wystarczą 4 proste kroki</button>
        <img src={parzenica} alt="" />
        <div className="four--steps">
          <div className=""></div>
          <Carousel>
            <Icon icon={wybierz} />
            <Icon icon={spakuj} />
            <Icon icon={zdecyduj} />
            <Icon icon={kurier} />
          </Carousel>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};
export default FourSteps;
