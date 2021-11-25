import React from "react";
import './Weather.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(){
    return(
        <div className="Forecast mt-4">
            <div className="row">
            <div className="col-sm-2">
            <p>
                Fri
            </p>
           <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={50}
            animate={true}
          />
             <p className="forecast-temp">
                11°
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Sat
            </p>
           <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={50}
            animate={true}
          />
             <p className="forecast-temp">
                5°
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Sun
            </p>
           <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={50}
            animate={true}
          />
             <p className="forecast-temp">
                8°
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Mon
            </p>
           <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size={50}
            animate={true}
          />
             <p className="forecast-temp">
                2°
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Tues
            </p>
            <div>
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size={50}
            animate={true}
          />
        </div>
             <p className="forecast-temp">
                5°
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Weds
            </p>
           <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size={50}
            animate={true}
          />
             <p className="forecast-temp">
                2°
            </p>
            </div>
            </div>
        </div>
    )
}