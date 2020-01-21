import React, { useEffect, useState } from "react";

import DisplayTheWeather from "./DisplayTheWeather";
import Search from "./Search";
import Spinner from "../components/layout/Spinner";
import Error from "../components/layout/Error";
const FetchTheWeather = () => {
  const [fetchData, setFetchData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let openwetherkey;
  if (process.env.NODE_ENV !== "production") {
    openwetherkey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  } else {
    openwetherkey = process.env.OPENWEATHERMAP_API_KEY;
  }
  // Get city name
  const searchCity = async (city = "utrecht") => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${openwetherkey}&units=metric`
      );

      const data = await res.json();

      setFetchData(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
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

      <DisplayTheWeather fetchData={fetchData} />
    </>
  );
};

export default FetchTheWeather;
