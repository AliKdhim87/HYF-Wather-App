import React, { useContext } from "react";
import WeatherContext from "../../context/weather/weatherContext";
const Alert = () => {
  const weatherContext = useContext(WeatherContext);
  const { alert } = weatherContext;

  return (
    alert && (
      <div className={`alert alert-primary text-center`} role='alert'>
        No city found, Write a City name to get Your forecast weather
      </div>
    )
  );
};

export default Alert;
