import React, { Fragment } from "react";
import "./App.css";
import Media from "react-media";
import Mobile from "./components/Mobil/Mobile";
import Tablet from "./components/Tablet/Tablet";
import Desktop from "./components/Desktop/Desktop";

// import Lights from "./components/Lights/Lights";

function App() {
  return (
    <>
      <Media
        queries={{
          phone: "(max-width: 599px)",
          tablet: "(min-width: 600px) and (max-width: 1199px)",
          desktop: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.phone && <Mobile />}
            {matches.tablet && <Tablet />}
            {matches.desktop && <Desktop />}
          </Fragment>
        )}
      </Media>

      {/* <Lights /> */}
    </>
  );
}

export default App;
