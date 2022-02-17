import React, { useState, useEffect } from "react";

function WeatherCard({ weatherAllData }) {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    weatherStatus,
    name,
    country,
    sunset,
    humidity,
    pressure,
    speed,
  } = weatherAllData;

  useEffect(() => {
    if (weatherStatus) {
      switch (weatherStatus) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherStatus]);

  let date = new Date(sunset * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherStatus}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">
          {" "}
          {new Date().toLocaleString("en-US", {
            hour12: true,
          })}
        </div>
        {/* 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr.toLocaleString("en-US", {
                  hour12: true,
                })}
                <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Presure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard;
