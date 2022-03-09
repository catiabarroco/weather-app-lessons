import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.date.dt * 1000);
  let day = date.getDay();

  return (
    <div className="WeatherForecastDay">
      <div>{days[day]}</div>
      <WeatherIcon code={props.date.weather[0].icon} size={36} />
      <div className="ForecastTemperature">
        <span className="ForecastTemperatureMax">
          {Math.round(props.date.temp.max)}°
        </span>
        <span className="ForecastTemperatureMin">
          {" "}
          {Math.round(props.date.temp.min)}°
        </span>{" "}
      </div>
    </div>
  );
}
