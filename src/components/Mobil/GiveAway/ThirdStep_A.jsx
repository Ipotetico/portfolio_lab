import React from "react";

const ThirdStep_A = ({ handleSetStep }) => {
  return (
    <>
      <h3>
        Znajdź organizację, <br />
        której chcesz pomóc
      </h3>
      <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
      <div className="info">
        <div className="achtung">!</div>
        <p>
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </div>
      <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />
      <h4>Lokalizacja:</h4>
      <div className="select--box">
        <select name="bag" id="bag">
          <option selected="selected" disabled>
            Wybierz województwo:
          </option>
          <option value="1">dolnośląskie</option>
          <option value="2">kujawsko-pomorskie</option>
          <option value="3">lubelskie</option>
          <option value="4">lubuskie</option>
          <option value="5">łódzkie</option>
          <option value="6">małopolskie</option>
          <option value="7">mazowieckie</option>
          <option value="8">opolskie</option>
          <option value="9">podkarpackie</option>
          <option value="10">podlaskie</option>
          <option value="11">pomorskie</option>
          <option value="11">śląskie</option>
          <option value="11">świętokrzyskie</option>
          <option value="11">warmińsko-mazurskie</option>
          <option value="11">wielkopolskie</option>
          <option value="11">zachodniopomorskie</option>
        </select>
        //TODO zmiana values
      </div>
      <h3>Komu chcesz pomóc</h3>
      <form className="help--container">
        <div className="grid--for--buttons">
          {/* ===== */}

          <div className="group">
            <label htmlFor="moms">
              <input type="checkbox" name="" id="moms" hidden />
              <span>samotnym matkom</span>
            </label>
          </div>

          {/* ===== */}

          <div className="group">
            <label htmlFor="hobos">
              <input type="checkbox" name="" id="hobos" hidden />
              <span>bezdomnym</span>
            </label>
          </div>

          {/* ===== */}

          <div className="group">
            <label htmlFor="handi">
              <input type="checkbox" name="" id="handi" hidden />
              <span>niepełnosprawnym</span>
            </label>
          </div>

          {/* ===== */}

          <div className="group">
            <label htmlFor="senior">
              <input type="checkbox" name="" id="senior" hidden />
              <span>starszym</span>
            </label>
          </div>

          {/* ===== */}

          <div className="group">
            <label htmlFor="unpl">
              <input type="checkbox" name="" id="unpl" hidden />
              <span>bezrobotnym</span>
            </label>
          </div>

          {/* ===== */}

          <div className="group">
            <label htmlFor="kids">
              <input type="checkbox" name="" id="kids" hidden />
              <span>dzieciom</span>
            </label>
          </div>
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

export default ThirdStep_A;
