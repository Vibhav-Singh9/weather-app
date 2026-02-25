function WeatherCard({ data }) {

    return (
        <div className="weather-card">
            <h2>📍 {data.name}, {data.sys.country}</h2>
            <p>🌡 Temperature: {data.main.temp}°C</p>
            <p>🤔 Feels Like: {data.main.feels_like}°C</p>
            <p>☁ Condition: {data.weather[0].description}</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
            <p>🌬 Wind: {data.wind.speed} m/s</p> 
        </div>
    );
}

export default WeatherCard;