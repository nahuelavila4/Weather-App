import React from "react";
import "../WeatherInfo.css";
const WeatherInfo = ({ weather }) => {
  return (
    <div className="asdg">
      <div className="estado">
        <div className="contenedor-temp">
          <div className="temp"><h2>{weather?.current.temp_c}°</h2></div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            alt="Clima icono" className="imagen-clima"
          />
        </div>
        <div className="cond-text"><h2>{weather?.current.condition.text}</h2></div>
      </div>
      <div className="contenedor-asd">
        <div><h4>{weather?.location.name}</h4></div>
        <div><h4>{weather?.location.country}</h4></div>
      </div>
    </div>
  );
};

export default WeatherInfo;
