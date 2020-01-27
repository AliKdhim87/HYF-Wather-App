import React, { useEffect, useState } from "react";
import Alert from "./layout/Alert";
import DisplayTheWeather from "./DisplayTheWeather";
import Search from "./Search";
import Spinner from "../components/layout/Spinner";
import Error from "../components/layout/Error";
const FetchTheWeather = () => {
  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cityList, setCityList] = useState([]);

  // Get city name
  const searchCity = async city => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );

      const data = await res.json();

      setFetchData(data);
      if (data.cod === 200) {
        setCityList(currntCity => [...currntCity, data]);
      }

      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };
  // Romove City
  const removeCityById = id => {
    setCityList(cityList.filter(city => city.id !== id));
  };
  useEffect(() => {
    searchCity();
    // eslint-disable-next-line
  }, []);

  if (error) return <Error />;
  if (loading) return <Spinner />;

  return (
    <>
      <Search searchCity={searchCity} />
      {cityList.map(city => (
        <DisplayTheWeather
          city={city}
          key={city.id}
          removeCityById={removeCityById}
        />
      ))}
      <Alert fetchData={fetchData} />
    </>
  );
};

export default FetchTheWeather;
