import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import rainImage from "./squirtle.png";
import cloudImage from "./jigglypuff.png";
import clearDayImage from "./pikachu.png";
import snowImage from "./dewgong.png";
import fogImage from "./koffing.png";

function App() {
  return (
    <div className="App mt-0">
      <div className="container pt-4">
<Weather defaultCity="Freiburg im Breisgau"/>
           
        </div>
        <div className="container icon-description mt-4">
          <div className="row">
            <div className="col-2">
            <img src={clearDayImage} alt="clear-day" width="50" className="img-fluid"/>
           <p className="" >Clear</p>
            </div>
            <div className="col-2">
            <img src={rainImage} alt="clear-day" width="50" className="img-fluid"/>
           <p className="d-inline" >Rainy</p>
            </div>
            <div className="col-2">
            <img src={fogImage} alt="clear-day" width="50" className="img-fluid"/>
           <p className="d-inline" >Foggy</p>
            </div>
            <div className="col-2">
            <img src={cloudImage} alt="clear-day" width="50" className="img-fluid"/>
           <p className="d-inline" >Cloudy</p>
            </div>
            <div className="col-2">
            <img src={snowImage} alt="clear-day" width="50" className="img-fluid"/>
           <p className="d-inline" >Snowy</p>
            </div>
            </div>
        </div>
        <div className="footer-wrap">
        <p className="footer">
                <a className="open-source-link" href="https://github.com/swymerjo/weather-project-react" rel="noopener noreferrer">Open source code </a> by
                <a className="name-link" href ="https://jovial-roentgen-8bfbb8.netlify.app" rel="noopener noreferrer"> Sammy Wymer </a> 
                from <a className="website-link" href="https://app.netlify.com/sites/jovial-roentgen-8bfbb8/overview" rel="noopener noreferrer">undersTand'em</a> </p>
                <p><small>I do not own the rights to Pokémon. Just a fan geeking out!</small></p>
        </div>
        </div>
        
   
  );
}
export default App;
