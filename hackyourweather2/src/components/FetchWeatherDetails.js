import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import Spinner from "./layout/Spinner";
import Error from "./layout/Error";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const FetchWeatherDetails = ({ match }) => {
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // Get Weather detail
  const fetchDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${match.params.id}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherDetails(data);

      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, []);
  if (loading) return <Spinner />;
  if (error) return <Error />;
  if (weatherDetails === null) return <Spinner />;
  return (
    <div>
      <h1 className='text-center'>Weather Details</h1>
      <Link to='/' className='btn btn-dark mb-1'>
        Home Page
      </Link>
      <ResponsiveContainer width='100%' height={180}>
        <AreaChart
          data={weatherDetails.list}
          margin={{
            top: 10,
            right: 20,
            left: -10,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='dt_txt' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='main.temp'
            stroke='#8884d8'
            fill='#8884d8'
            // barSize={250}
          />
        </AreaChart>
      </ResponsiveContainer>
      {weatherDetails.list.map((weather, index) => (
        <WeatherDetails weather={weather} key={index} />
      ))}
    </div>
  );
};
export default FetchWeatherDetails;
