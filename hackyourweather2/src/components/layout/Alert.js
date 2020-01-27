import React from "react";

const Alert = ({ fetchData }) => {
  if (fetchData.message === "bad query") return "";
  if (fetchData.cod >= 400)
    return (
      <div className='alert alert-primary text-center' role='alert'>
        No city found, Write a City name to get Your forecast weather
      </div>
    );
  return <div></div>;
};
export default Alert;
