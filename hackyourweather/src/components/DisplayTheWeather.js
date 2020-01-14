import React from "react";

const DisplayTheWeather = ({ data }) => {
  return (
    <div className='col-lg-4 mb-2'>
      <div className='weather-content'>
        <div className=' p-3'>
          <h3 className='h3 text-center'>
            {data.name}, <span>{data.sys.country}</span>
          </h3>
          <h5 className='h5  '>{data.weather[0].main}</h5>
          <p className='lead  '>{data.weather[0].description}</p>
          <div className='overlay col-lg-12'>
            <p className='lead p-2'>
              <b>min temp:</b> {data.main.temp_min}
            </p>
          </div>
          <div className='overlay col-lg-12'>
            <p className='lead p-2'>
              <b>Max temp:</b> {data.main.temp_max}
            </p>
          </div>
          <div className='overlay col-lg-12'>
            <p className='lead p-2'>
              <b>Location: </b>
              {data.coord.lon}, {data.coord.lat}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTheWeather;
