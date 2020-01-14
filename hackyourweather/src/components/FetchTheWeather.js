import React from "react";
import cityWeather from "../city-weather.json";
import DisplayTheWeather from "./DisplayTheWeather";
const FetchTheWeather = () => {
  return (
    <div className='row'>
      {cityWeather.map(data => (
        <DisplayTheWeather data={data} />
      ))}
    </div>
  );
};

export default FetchTheWeather;
