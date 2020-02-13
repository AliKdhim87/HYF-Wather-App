import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import WeatherDetails from "./WeatherDetails";
import Spinner from "./layout/Spinner";
import Error from "./layout/Error";
import WeatherContext from "../context/weather/weatherContext";
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
  const weatherContext = useContext(WeatherContext);
  const { weatherDetails, fetchDetails, loading, error } = weatherContext;
  const id = match.params.id;

  useEffect(() => {
    fetchDetails(id);
    // eslint-disable-next-line
  }, []);
  if (loading || weatherDetails === null) return <Spinner />;
  if (error) return <Error />;

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
            barSize={250}
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
