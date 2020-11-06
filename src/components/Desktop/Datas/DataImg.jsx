import React from "react";

const DataImg = ({ picture }) => {
  return (
    <img src={process.env.PUBLIC_URL + `/img/${picture}.svg`} alt={picture} />
  );
};

export default DataImg;
