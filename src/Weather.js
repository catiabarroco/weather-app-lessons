import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="row p-relative">
            <div className="col img-col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
              />
            </div>
            <div className="col">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
