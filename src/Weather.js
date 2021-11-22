import React from "react";
import './Weather.css';
import Forecast from "./Forecast";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
    let weatherData = {
      city: "Freiburg im Breisgau",
      temperature: 14,
      date: "Tuesday 10:00",
      description: "Cloudy",
      humidity: 80,
      wind: 10
    };
  
    return (
      <div class="app-outer">
      <div className="Weather shadow">
        <form className="mb-4">
          <div className="row">
            <div className="col-sm-6">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow p-2"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-6">
             <button className= "submit-button shadow w-20">
                 Submit
             </button>
             <button className= "current-button shadow w-20">
                 Current
             </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul className="description-list">
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix weather-temperature">
              <ReactAnimatedWeather
            icon="RAIN"
            color="#529AFF"
            size={50}
            animate={true}
          />
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a class="text-decoration-none" href="/">°C</a> | <a class="text-decoration-none" href="/">°F</a>
                </span>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <Forecast />
      </div>
      </div>
    );
  }
  