import React from "react";
import BtnFwrBwd from "./BtnFwdBwd";
import Info from "./Info";
import Parzenica from "./Parzenica";

const SecondStep = ({ handleSetStep }) => {
  return (
    <>
      <h3>
        Podaj liczbę 60 l worków, <br /> w które spakowałeś/aś rzeczy
      </h3>
      <Parzenica />
      <Info
        span="WAŻNE!"
        info="Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz"
        link=" TUTAJ."
      />

      <Parzenica />
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
      <BtnFwrBwd handleSetStep={handleSetStep} />
    </>
  );
};

export default SecondStep;
