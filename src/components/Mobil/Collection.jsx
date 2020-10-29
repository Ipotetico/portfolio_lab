import React from "react";
import parzenica from "../img/parzenica.svg";

const Collection = () => {
  return (
    <>
      <div className="container collection">
        <h2>
          Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?
          <img src={parzenica} alt="" />
        </h2>
        <button className="button">Załóz konto</button>
      </div>
    </>
  );
};

export default Collection;
