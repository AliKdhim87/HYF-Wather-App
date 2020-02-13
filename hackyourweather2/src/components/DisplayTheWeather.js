import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DisplayTheWeather = ({ city, removeCityById }) => {
  return (
    <div className='row'>
      <div className='col-lg-12 mb-2'>
        <div className='weather-content'>
          <button className='btn float-right '>
            <FontAwesomeIcon
              icon={faTimes}
              size='2x'
              onClick={() => removeCityById(city.id)}
            />
          </button>

          <div className=' p-3'>
            <h3 className='h3 text-center'>
              {city.name}, <span>{city.sys.country}</span>
            </h3>
            <h5 className='h5  '>{city.weather[0].main}</h5>
            <p className='lead  '>{city.weather[0].description}</p>
            <div className='text-center'>
              <img
                src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt={city.weather[0].main}
                width='80'
              />
            </div>
            <Link
              to={`/weatherDetails/${city.id}`}
              className='mb-2 btn btn-dark'
            >
              Get more weather info
            </Link>
            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>min temp:</b> {Math.floor(city.main.temp_min)} °C
              </p>
            </div>
            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>Max temp:</b> {Math.floor(city.main.temp_max)} °C
              </p>
            </div>
            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>Location: </b>
                {city.coord.lon}, {city.coord.lat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTheWeather;
