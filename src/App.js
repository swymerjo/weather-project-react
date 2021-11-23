import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
<Weather defaultCity="Freiburg"/>
            <p className="footer">
                <a className="open-source-link" href="https://github.com/swymerjo/weather-project-react">Open source code </a> by
                <a className="name-link" href ="https://jovial-roentgen-8bfbb8.netlify.app"> Sammy Wymer </a> 
                from <a className="website-link" href="https://app.netlify.com/sites/jovial-roentgen-8bfbb8/overview">undersTand'em </a> </p>
        </div>
    </div>
  );
}
export default App;
