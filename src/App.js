import "./App.css";
import WeatherApp from "./components/WeatherApp";
function App() {
  return (
    <div className="App contenedor-principal">
      <div className="elementos">
        <div className="titulo">
          <h1>Aplicacion de clima</h1>
          <p>Por Nahuel Avila</p>
        </div>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
