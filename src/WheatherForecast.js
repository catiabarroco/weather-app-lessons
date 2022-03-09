import React, { useState } from "react";
import "./WheatherForecast.css";

import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WheatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay date={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.data.longitude;
    let lat = props.data.latitude;
    let apiKey = `a50f410ea36ad12d8cb30de68e6fc33b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
