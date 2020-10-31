import React from "react";

const Collection = () => {
  return (
    <>
      <div className="container collection">
        <h2>
          Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?
          <img
            src={process.env.PUBLIC_URL + "/img/parzenica.svg"}
            alt="parzenica"
          />
        </h2>
        <button className="button">Załóz konto</button>
      </div>
    </>
  );
};

export default Collection;
