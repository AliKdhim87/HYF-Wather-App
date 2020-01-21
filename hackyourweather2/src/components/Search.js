import React, { useState } from "react";
const Search = ({ searchCity }) => {
  const [cityName, setCityName] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    searchCity(cityName);
    setCityName("");
  };

  const onChange = e => setCityName(e.target.value);

  return (
    <div className='form-group'>
      <form onSubmit={onSubmit}>
        <input
          className='form-control'
          type='text'
          name='input'
          placeholder='Search City'
          value={cityName}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-primary btn-block mt-3'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
