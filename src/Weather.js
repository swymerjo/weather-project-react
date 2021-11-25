import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});


  function handleResponse(response){
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt*1000)
    });
  }

 if (weatherData.ready) {
  return (
    <div className="app-outer">
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
        <h1>{props.defaultCity}</h1>
        <ul className="description-list">
          <li>
            <FormattedDate date= {weatherData.date}/>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
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
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a className="text-decoration-none" href="/">°C</a> | <a className="text-decoration-none" href="/">°F</a>
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
 } else {
  const apiKey ="96c6ec35768d7fb6accd0167701b703c";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
 }
}