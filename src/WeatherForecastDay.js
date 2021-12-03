import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecastDay(props) {
    function maxTemperature(){
        let temperature =Math.round(props.data.temp.max);
        return (`${temperature}°`);
    }

    function minTemperature(){
        let temperature =Math.round(props.data.temp.min);
        return (`${temperature}°`);
    }

    function day(){
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();

        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];

    }

    return (
        <div>
    <div className="forecast-day">
        {day()}
    </div>
   <WeatherIcon code={props.data.weather[0].icon}
  />
     <span className="forecast-temp-max">
        {maxTemperature()}
    </span>
    <span className="forecast-temp-min">
    {minTemperature()}
    </span>
    </div>
    )
}