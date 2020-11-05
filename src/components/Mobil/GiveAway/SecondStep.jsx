import React from "react";

const SecondStep = ({ handleSetStep }) => {
  return (
    <>
      <h3>
        Podaj liczbę 60 l worków, <br /> w które spakowałeś/aś rzeczy
      </h3>
      <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
      <div className="info">
        <div className="achtung">!</div>
        <p>
          <span>WAŻNE!</span> <br />
          Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz
          <a href="http://" target="_blank" rel="noopener noreferrer">
            TUTAJ.
          </a>
        </p>
      </div>
      <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
      <h4>Liczba 60 l worków:</h4>
      <div className="select--box">
        <select name="bag" id="bag">
          <option selected="selected" disabled>
            Liczba worków:
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11"> {">"}10 </option>
        </select>
      </div>
      <div className="button--container">
        <button
          onClick={() => handleSetStep((prevState) => prevState - 1)}
          className="button"
        >
          cofnij
        </button>
        <button
          onClick={() => handleSetStep((prevState) => prevState + 1)}
          className="button"
        >
          dalej
        </button>
      </div>
    </>
  );
};

export default SecondStep;
