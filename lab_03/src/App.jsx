import { useState,useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather.js';
import './App.css';

function kierunekWiatru(deg) {
  const kierunki = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round((deg % 360) / 45) % 8;
  return kierunki[index];
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const search = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // puste pole - nic nie robimy
    setLoading(true);
    setError('');
    try {
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery(''); // czyścimy pole po udanym wyszukiwaniu
    
   }catch (err) {
    setWeather(null);
    setError(err.message);
    } finally {
    setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={search}>
      <input
        type="text"
        className="search"
        placeholder="Wpisz miasto..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </form>
    {!isOnline && (
        <p className="message error">
          Brak połączenia - pokazuję ostatnio pobrane dane.
        </p>
    )}
    {loading && <p className="message">Pobieranie danych...</p>}
    {error && <p className="message error">{error}</p>}
    {weather && (
      <div className="city">
      <h2 className="city-name">
      <span>{weather.name}</span>
      <sup>{weather.sys.country}</sup>
      </h2>
      <div className="city-temp">
        <span>{Math.round(weather.main.temp)}</span>
        <sup>°C</sup>
      </div>
      <div className="info">
        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="ikona pogody" />
        <p>{weather.weather[0].description}</p>
        <p>Ciśnienie: {weather.main.pressure} hPa</p>
        <p>Wilgotność: {weather.main.humidity} %</p>
        <p>Prędkość wiatru: {weather.wind.speed} m/s</p>
        {weather.wind.gust && <p>Porywy wiatru: {weather.wind.gust} m/s</p>}
        <p>Kierunek wiatru: {kierunekWiatru(weather.wind.deg)}</p>
        <p>Aktualność danych: {new Date(weather.dt * 1000).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      </div>
    )}
    </div>
    );
  }

export default App;