import React from "react";
import rainImage from "./squirtle.png";
import cloudImage from "./jigglypuff.png";
import clearDayImage from "./pikachu.png";
import snowImage from "./dewgong.png";
import fogImage from "./koffing.png";

export default function WeatherIcon(props){
    const codeMapping = {
        "01d": <img src={clearDayImage} alt="clear-day" width="70" className="img-fluid"/>,
        "01n": <img src={clearDayImage} alt="clear-day" width="70" className="img-fluid"/>,
        "02d": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "02n": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "03d": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "03n": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "04d": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "04n": <img src={cloudImage} alt="cloud" width="70" className="img-fluid"/>,
        "09d": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "09n": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "10d": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "10n": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "11d": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "11n": <img src={rainImage} alt="rain" width="70" className="img-fluid"/>,
        "13d": <img src={snowImage} alt="snow" width="70" className="img-fluid"/>,
        "13n": <img src={snowImage} alt="snow" width="70" className="img-fluid"/>,
        "50d": <img src={fogImage} alt="fog" width="70" className="img-fluid"/>,
        "50n": <img src={fogImage} alt="fog" width="70" className="img-fluid"/>,
    };

 
    return (
        <div>
{codeMapping[props.code]}
        </div>
    )
}
