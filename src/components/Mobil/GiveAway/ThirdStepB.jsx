import React from "react";
import BtnFwrBwd from "./BtnFwdBwd";
import Fundation from "./Fundation";
import Info from "./Info";
import Parzenica from "./Parzenica";

const ThirdStepB = ({ handleSetStep }) => {
  return (
    <>
      <h3>
        Znajdź organizację, <br />
        której chcesz pomóc
      </h3>
      <Parzenica />
      <Info
        span="INFO!"
        info="Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania
        wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której
        trafi Twoja przesyłka."
      />
      <Parzenica />

      {/* ===== */}
      <div className="fundations">
        <Fundation fundation="Fundacja A" />
        <Fundation fundation="Fundacja B" />
        <Fundation fundation="Fundacja C" />
      </div>

      <BtnFwrBwd handleSetStep={handleSetStep} />
    </>
  );
};

export default ThirdStepB;
