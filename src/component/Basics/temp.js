import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";

function Temp() {
  const [location, setLocation] = useState("");
  const [allTemp, setAllTemp] = useState({});
  let url;

  function handleChange(e) {
    setLocation(e.target.value);
  }

  async function weatherData() {
    try {
      if (location) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={API_KEY}&units=metric`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=dombivali&appid={API_KEY}&units=metric`;
      }

      let res = await fetch(url);
      let data = await res.json();

      //   console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: weatherStatus } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      //   console.log(`temp : ${temp}\nHum: ${humidity}\nPress: ${pressure}`);
      const weatherAll = {
        temp,
        humidity,
        pressure,
        weatherStatus,
        name,
        speed,
        country,
        sunset,
      };
      setAllTemp(weatherAll);
    } catch (error) {
      console.log(error);
    }
    setLocation("");
  }

  useEffect(() => {
    weatherData();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            onChange={handleChange}
            value={location}
          />
          <button className="searchButton" type="button" onClick={weatherData}>
            Search
          </button>
        </div>
      </div>
      <WeatherCard weatherAllData={allTemp} />
    </>
  );
}

export default Temp;
