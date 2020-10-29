import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Icon from "./Icon";
import parzenica from "../img/parzenica.svg";
import fundacje from "../img/fundacje.svg";
import ngo from "../img/ngo.svg";
import lokalsi from "../img/lokalsi.svg";

const Help = () => {
  return (
    <>
      <div className="container help">
        <div className="three--steps">
          <h2>Komu pomagamy?</h2>
          <img src={parzenica} alt="" />
          <Carousel>
            <Icon icon={fundacje} />
            <Icon icon={ngo} />
            <Icon icon={lokalsi} />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Help;
