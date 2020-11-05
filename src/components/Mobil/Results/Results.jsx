import React from "react";

const Results = () => {
  return (
    <>
      <div className="container account results">
        <h2>
          Zacznij pomagać!
          <br />
          <span>Oddaj niechciane rzeczy w zaufane ręce</span>
        </h2>
        <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
        <div className="results--circles">
          <div className="result">
            <div className="circle">
              <h2>0</h2>
            </div>
            <h3>
              oddanych <br /> worków
            </h3>
          </div>
          <div className="result">
            <div className="circle">
              <h2>0</h2>
            </div>
            <h3>
              wspartych
              <br /> organizacji
            </h3>
          </div>
          <div className="result">
            <div className="circle">
              <h2>0</h2>
            </div>
            <h3>
              zorganizowanych
              <br /> zbiórek
            </h3>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
        <div className="button--field">
          <button className="button">Oddaj rzeczy</button>
          <button className="button">Zorganizuj zbiórkę</button>
          <button className="button">Wyloguj</button>
        </div>
      </div>
    </>
  );
};

export default Results;
