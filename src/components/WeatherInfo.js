import React from "react";
import "../WeatherInfo.css";
const WeatherInfo = ({ weather }) => {
  return (
    <div className="asdg">
      <div className="contenedor-temp">
        <div className="temp">{weather?.current.temp_c}°</div>
        <div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            alt="Clima icono"
          />
        </div>
      </div>
      <div className="contenedor-asd">

      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
