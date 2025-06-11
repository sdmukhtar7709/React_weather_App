import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';

export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "APIKEY";

    let getweatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            let jsonresponse = await response.json();
            console.log(jsonresponse);
            let result = {
    city: jsonresponse.name,
    country: jsonresponse.sys.country,
    temp: jsonresponse.main.temp,
    feels_like: jsonresponse.main.feels_like,
    temp_min: jsonresponse.main.temp_min,
    temp_max: jsonresponse.main.temp_max,
    humidity: jsonresponse.main.humidity,
    wind: jsonresponse.wind.speed,
    clouds: jsonresponse.clouds.all,
    weather: jsonresponse.weather[0].main,
    description: jsonresponse.weather[0].description,
    icon: jsonresponse.weather[0].icon,
    sunrise: jsonresponse.sys.sunrise,
    sunset: jsonresponse.sys.sunset,
    timezone: jsonresponse.timezone
};
            setError("");
            return result;
           
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError("There was an error fetching the weather data. you enterd the city weather is not available .");
            return null;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handlesubmit = async (e) => {
        e.preventDefault();
        let newInfo = await getweatherinfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className='searchbox'>
            <h1>
                Search Weather here!
            </h1>
            <form onSubmit={handlesubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                /><br /><br />
                <Button variant="contained" color="success" type="submit">Search</Button>
            </form>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
    );
}
