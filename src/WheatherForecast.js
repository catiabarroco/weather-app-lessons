import React from "react";
import "./WheatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WheatherForecast(props) {
  let lon = props.data.longitude
  let lat = props.data.latitude
  let apiKey = `577ba2499c8332640e4a2e175db77b37`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response){
    console.log(response.data)
  }
    return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>

          <WeatherIcon code="01d" size={36}/>
          <div className="ForecastTemperature">
            <span className="ForecastTemperatureMax">19</span>
            <span className="ForecastTemperatureMin"> 10 </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
