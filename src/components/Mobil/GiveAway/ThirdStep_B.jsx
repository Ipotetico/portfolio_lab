import React from "react";

const ThirdStep_B = ({ handleSetStep }) => {
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
          Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania
          wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której
          trafi Twoja przesyłka.
        </p>
      </div>
      <img src={process.env.PUBLIC_URL + "/img/parzenica.svg"} alt="" />

      {/* ===== */}

      <div className="fundations">
        <div className="fundation">
          <label htmlFor="fund1">
            <input type="checkbox" name="" id="fund1" hidden />
            <span>Fundacja A</span>
          </label>
        </div>

        {/* ===== */}

        <div className="fundation">
          <label htmlFor="fund2">
            <input type="checkbox" name="" id="fund2" hidden />
            <span>Fundacja B</span>
          </label>
        </div>

        {/* ===== */}

        <div className="fundation">
          <label htmlFor="fund3">
            <input type="checkbox" name="" id="fund3" hidden />
            <span>Fundacja C</span>
          </label>
        </div>
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

export default ThirdStep_B;
