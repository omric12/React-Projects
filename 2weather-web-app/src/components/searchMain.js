import './style.css';

import React, { useEffect, useState } from 'react';

import WeatherDetails from './WeatherDetails';

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState('haifa');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=bc78118a46d4424642ad262a4e361e85`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTempInfo(getWeatherInfo());
  }, []);

  return (
    <>
      <div className='wrap' style={{ marginTop: 2 }}>
        <div className='search'>
          <input
            type='search'
            placeholder='Search city..'
            id='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='searchButton' onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default SearchMain;
