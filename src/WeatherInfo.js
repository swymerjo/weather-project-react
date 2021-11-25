import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import './Weather.css';

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row overview">
        <h1>{props.data.city}</h1>
        <div className="col-sm-6">
        <ul className="description-list">
          <li>
            <FormattedDate date= {props.data.date}/>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      </div>
      <div className="row">
        <div className="col-sm-6 temperature-wrap">
          <div className="clearfix weather-temperature">
            <ReactAnimatedWeather
          icon="RAIN"
          color="#529AFF"
          size={50}
          animate={true}
        />
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a className="text-decoration-none" href="/">°C</a> | <a className="text-decoration-none" href="/">°F</a>
              </span>
          </div>
        </div>
        <div className="col-sm-6">
          <ul className="humidity-wind">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>
    )
}