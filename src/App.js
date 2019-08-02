import React from "react";
import Map from "./components/Map";
import Dropdown from "./components/Dropdown";
import Results from './components/Results';
import Weather from "./components/Weather";

import "./assets/style.css";

const App = () => {
  return (
    <div className="App">
      <Map />
      <Weather />
      <Dropdown />
      <Results />
    </div>
  );
}

export default App;
