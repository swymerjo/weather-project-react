import React from "react";
import './App.css';

export default function Forecast(){
    return(
        <div className="forecast mt-4">
            <div className="row">
            <div className="col-sm-2">
            <p>
                Fri
            </p>
            <img className="forecast-img img-fluid" alt="weather-img" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  
            />
             <p>
                Temp
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Sat
            </p>
            <img className="forecast-img img-fluid" alt="weather-img" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  
            />
             <p>
                Temp
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Sun
            </p>
            <img className="forecast-img img-fluid" alt="weather-img" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  
            />
             <p>
                Temp
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Mon
            </p>
            <img className="forecast-img img-fluid" alt="weather-img" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  
            />
             <p>
                Temp
            </p>
            </div>
            <div className="col-sm-2">
            <p>
                Tues
            </p>
            <img className="forecast-img img-fluid" alt="weather-img" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"  
            />
             <p>
                Temp
            </p>
            </div>
            </div>
        </div>
    )
}