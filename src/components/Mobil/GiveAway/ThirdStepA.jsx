import React from "react";
import BtnFwrBwd from "./BtnFwdBwd";
import HelpWhome from "./HelpWhome";
import Info from "./Info";
import Parzenica from "./Parzenica";

const ThirdStepA = ({ handleSetStep }) => {
  return (
    <>
      <h3>
        Znajdź organizację, <br />
        której chcesz pomóc
      </h3>
      <Parzenica />
      <Info
        span="INFO!"
        info="Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy."
      />

      <Parzenica />
      <h4>Lokalizacja:</h4>
      <div className="select--box">
        <select name="bag" id="bag">
          <option selected="selected" disabled>
            Wybierz województwo:
          </option>
          <option value="dosl">dolnośląskie</option>
          <option value="kujp">kujawsko-pomorskie</option>
          <option value="lubl">lubelskie</option>
          <option value="lubu">lubuskie</option>
          <option value="lodz">łódzkie</option>
          <option value="malo">małopolskie</option>
          <option value="mazo">mazowieckie</option>
          <option value="opol">opolskie</option>
          <option value="podk">podkarpackie</option>
          <option value="podl">podlaskie</option>
          <option value="pomo">pomorskie</option>
          <option value="slas">śląskie</option>
          <option value="swie">świętokrzyskie</option>
          <option value="warm">warmińsko-mazurskie</option>
          <option value="wkpl">wielkopolskie</option>
          <option value="zach">zachodniopomorskie</option>
        </select>
      </div>
      <h3>Komu chcesz pomóc?</h3>
      <form className="help--container">
        <div className="grid--for--buttons">
          <HelpWhome group="samotne matki" />
          <HelpWhome group="bezdomni" />
          <HelpWhome group="niepełnosprawni" />
          <HelpWhome group="starsi" />
          <HelpWhome group="bezrobotni" />
          <HelpWhome group="dzieci" />
        </div>
        <div className="optional">
          <input
            type="text"
            name=""
            id=""
            placeholder="Wpisz nazwę konkretnej organizacji (opcjonalnie)"
          />
        </div>
      </form>
      <BtnFwrBwd handleSetStep={handleSetStep} />
    </>
  );
};

export default ThirdStepA;
