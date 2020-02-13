import React, { useReducer } from "react";
import WeatherContext from "./weatherContext";
import WeatherReducer from "./weatherReducer";
import {
  SEARCH_CITY,
  SET_LOADING,
  SET_ERROR,
  REMOVE_CITY_BY_ID,
  FETCH_DETAILS,
  SET_ALERT
} from "../types";

const WeatherState = props => {
  const initailState = {
    fetchData: [],
    weatherDetails: null,
    loading: false,
    error: false,
    alert: false
  };
  const [state, dispatch] = useReducer(WeatherReducer, initailState);
  const searchCity = async city => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod >= 400) {
        setAlert(true);
      } else {
        dispatch({ type: SEARCH_CITY, payload: data });
      }
    } catch (e) {
      setError(true);
    }
  };
  // Get Weather detail
  const fetchDetails = async id => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await res.json();
      dispatch({ type: FETCH_DETAILS, payload: data });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const setError = () => {
    dispatch({ type: SET_ERROR });
  };
  const removeCityById = id => {
    dispatch({ type: REMOVE_CITY_BY_ID, payload: id });
  };
  const setAlert = () => {
    dispatch({ type: SET_ALERT });
  };
  return (
    <WeatherContext.Provider
      value={{
        fetchData: state.fetchData,
        loading: state.loading,
        error: state.error,
        weatherDetails: state.weatherDetails,
        alert: state.alert,
        searchCity,
        setLoading,
        removeCityById,
        fetchDetails,
        setAlert
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherState;
