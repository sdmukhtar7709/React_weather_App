import React, { useState } from "react";
import Searchbox from "./searchbox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        feels_like: 24.84,
        humidity: 60,
        temp: 25.34,
        temp_min: 23.05,
        temp_max: 26.34,
        weather: "haze",
        city: "Delhi"
    });
     
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
           
            <Searchbox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}