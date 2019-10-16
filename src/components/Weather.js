import React, { useEffect, useState } from "react";
import { get } from "lodash";
import weather from "openweather-apis";
import droplet from "../assets/droplet.svg";

export default () => {
  const [data, setData] = useState();
  // passing empty array as second arg treats this similarly to componentDidMount
  useEffect(() => {
    weather.setLang("en");
    weather.setCity("Austin");
    weather.setUnits("imperial");

    weather.setAPPID("42ebbe7c726c3fc801edf7558521481b");

    weather.getAllWeather(function(err, res) {
      if (err) {
        setData({
          error:
            "Weather could not be fetched at this time. Please try again later."
        });
      }
      setData({
        temp: get(res, "main.temp"),
        condition: get(res, "weather[0].description"),
        img: get(res, "weather[0].icon")
      });
    });
  }, []);

  // use droplet as fallback icon
  const imgUrl = get(data, "img")
    ? `http://openweathermap.org/img/wn/${data.img}@2x.png`
    : droplet;

  const temp = get(data, "temp");
  const error = get(data, "error");
  return (
    <div className="weather fadeInDown">
      <h2>Current Weather in Austin, TX</h2>
      <div className="weather-info">
        <img src={imgUrl} className="weather-icon" alt="weather-icon" />
        {error ? <p>{error}</p> : <p>{temp} F</p>}
      </div>
    </div>
  );
};
