import React, { useContext } from "react";
import DisplayTheWeather from "./DisplayTheWeather";
import Search from "./Search";
import Spinner from "../components/layout/Spinner";
import Error from "../components/layout/Error";
import WeatherContext from "../context/weather/weatherContext";

const FetchTheWeather = () => {
  const weatherContext = useContext(WeatherContext);
  const {
    fetchData,
    error,
    loading,
    searchCity,
    removeCityById
  } = weatherContext;

  if (error) return <Error />;
  if (loading) return <Spinner />;

  return (
    <>
      <Search searchCity={searchCity} />
      {fetchData.map(city => (
        <DisplayTheWeather
          city={city}
          key={city.id}
          removeCityById={removeCityById}
        />
      ))}
    </>
  );
};

export default FetchTheWeather;
