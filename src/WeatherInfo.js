import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row overview">
        <h1 className="city-name">{props.data.city}</h1>
        <div className="col-sm-6">
        <ul className="description-list">
          <li>
            <FormattedDate date= {props.data.date}/>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      </div>
      <div className="row temperature-wrap">
        <div className="col-7 pt-4">
          <div className="clearfix weather-temperature d-flex">
            <WeatherIcon code={props.data.icon} alt=""/>
            <WeatherTemperature celsius={props.data.temperature}/>
          </div>
        </div>
        <div className="col-4">
          <ul className="weather-specs">
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      </div>
    )
}