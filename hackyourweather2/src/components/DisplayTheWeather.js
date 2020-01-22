import React from "react";

const DisplayTheWeather = ({ fetchData }) => {
  if (fetchData.cod >= 400)
    return (
      <div className='alert alert-primary text-center' role='alert'>
        No city found, Write a City name to get Your forecast weather
      </div>
    );
  return (
    <div className='row'>
      <div className='col-lg-12 mb-2'>
        <div className='weather-content'>
          <div className=' p-3'>
            <h3 className='h3 text-center'>
              {fetchData.name}, <span>{fetchData.sys.country}</span>
            </h3>
            <h5 className='h5  '>{fetchData.weather[0].main}</h5>
            <p className='lead  '>{fetchData.weather[0].description}</p>
            <div className='text-center'>
              <img
                src={`http://openweathermap.org/img/w/${fetchData.weather[0].icon}.png`}
                alt={fetchData.weather[0].main}
                width='80'
              />
            </div>

            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>min temp:</b> {Math.floor(fetchData.main.temp_min)} °C
              </p>
            </div>
            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>Max temp:</b> {Math.floor(fetchData.main.temp_max)} °C
              </p>
            </div>
            <div className='overlay col-lg-12'>
              <p className='lead p-2'>
                <b>Location: </b>
                {fetchData.coord.lon}, {fetchData.coord.lat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTheWeather;
