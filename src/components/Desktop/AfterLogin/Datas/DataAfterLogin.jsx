import React, { useState, useEffect } from "react";
import Infos from "../Info/Infos";

// import organizacje from "../img/5_organizacji.svg";
// import zbiorki from "../img/7_zbiorek.svg";

const DataAfterLogin = ({ formula }) => {
  const [info, setInfo] = useState(
    <p>
      Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć
      komu najlepiej je przekazać.
    </p>
  );

  useEffect(() => {
    if (formula === 1) {
      setInfo(
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      );
    }

    if (formula === 2) {
      setInfo(
        <p>
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz <a href="">TUTAJ</a>.
        </p>
      );
    }

    if (formula === 3) {
      setInfo(
        <p>
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      );
    }
  }, [formula]);

  return (
    <div className="data--container after--login">
      <img
        className="data--picture"
        src={process.env.PUBLIC_URL + "/img/tlo_papier.png"}
        alt="tlo papier"
      />
      <div className="datas">
        <Infos headline="Ważne!" info={info} />
      </div>
    </div>
  );
};
export default DataAfterLogin;
