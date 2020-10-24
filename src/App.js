import React from "react";
import "./App.css";
import Data from "./components/Data";
import Header from "./components/Header";
// import Lights from "./components/Lights/Lights";

function App() {
  return (
    <>
      <main className="main--container">
        <Header />
        <Data />
      </main>

      {/* <Lights /> */}
    </>
  );
}

export default App;
