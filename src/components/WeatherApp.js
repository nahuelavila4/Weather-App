import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
// useEffect se ejecuta cuando: 1)ni bien se crea un comp,
// 2)cuando se hace un render o 3) cuando se elemina un comp

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);
  // async await solo se puede usar con funcion normal
  async function loadInfo(city = "buenos aires") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeather(json);
      console.log(json);
    } catch (error) {}
  }

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };
  return (
    <div className="padre">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherInfo weather={weather}/>
    </div>
  );
};

export default WeatherApp;
