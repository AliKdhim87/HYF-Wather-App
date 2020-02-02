import React from "react";
import calendar from "./icons/calendar.png";
import flags from "./icons/flags.png";
import "../App.css";
const WeatherDetails = ({ weather }) => {
  const convertDate = new Date(weather.dt_txt).toLocaleDateString("en-NL");

  return (
    <div>
      <div className='row p-2 bg-light text-dark text-center'>
        <div className='col-lg-4 col-sm-4 col-xs-12'>
          <h2>
            <img src={calendar} alt='icon' />{" "}
            {parseInt(weather.dt_txt.slice(10)) === 0
              ? convertDate
              : weather.dt_txt.slice(10, -3)}
          </h2>
        </div>
        <div className='col-lg-4 col-sm-4 xs'>
          <h3 className=' m-1'>{weather.weather[0].description}</h3>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].main}
            width='60'
          />
        </div>
        <div className='col-lg-4 col-sm-4 xs'>
          <h2>{Math.round(weather.wind.speed)} km/h</h2>
          <img src={flags} alt='icon' />
        </div>
      </div>
      <div className='row mb-3 '>
        <div className='col-lg-3 text-center   bg-dark text-light weather-detail-content'>
          <h6 className='h6 p-1'>Min tempreature</h6>
          <p>{Math.floor(weather.main.temp_min)} °C</p>
        </div>
        <div className='col-lg-3 text-center   bg-dark text-light weather-detail-content'>
          <h6 className='h6 p-1'>Max tempreature</h6>
          <p>{Math.floor(weather.main.temp_max)} °C</p>
        </div>
        <div className='col-lg-3 text-center   bg-dark text-light weather-detail-content'>
          <h6 className='h6 p-1 '>Currently tempreature</h6>
          <p>{Math.floor(weather.main.temp)} °C</p>
        </div>
        <div className='col-lg-3 text-center   bg-dark text-light weather-detail-content'>
          <h6 className='h6 p-1'>Humidity </h6>

          <p> {weather.main.humidity} %</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
