import { useState, useEffect } from "react";
import { fetchWeather } from "./services/api";
import Loader from "./components/Loader";
import FullScreenLoader from "./components/FullScreenLoader";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coldStart, setColdStart] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setColdStart(false);
    }, 1800);
  }, []);

  const handleSearch = async () => {
    if(!city) return;

    try {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
    }

    catch (err) {
      alert("City not found");
    }

    finally {
      setLoading(false);
    }
  };

  if(coldStart) return <FullScreenLoader />;

  return (
    <div className="container">
      <h1>Weather Finder</h1>

      <input
      type="text"
      placeholder="Enter city"
      value={city}
      onChange={(e) => setCity(e.target.value)}/>

      <button onClick={handleSearch}>Get Weather</button>

      {loading && <Loader/>}
      {weather && <WeatherCard data={weather}/>}
    </div>
  );
}

export default App;