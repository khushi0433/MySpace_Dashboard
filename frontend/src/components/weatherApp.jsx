import { useState, useEffect } from "react";

export default function WeatherWidget() {
        const [weather, setWeather] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          async function fetchWeather() {
            try {
              const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=e9bc0a76f0892d70914f7226714658c0`
              );
              const data = await res.json();
        
              setWeather({
                city: data.name,
                temp: Math.round(data.main.temp),
                feelsLike: Math.round(data.main.feels_like),
                humidity: data.main.humidity,
                wind: data.wind.speed,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
              });
        
              setLoading(false);
            } catch (error) {
              console.error("Error fetching weather:", error);
              setLoading(false);
            }
          }
        
          fetchWeather();
        }, []);
        
      
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Weather</h2>
            {loading ? (
              <p>Loading weather data...</p>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{weather.city}</h3>
                    <p className="text-gray-600">{weather.description}</p>
                    <p className="text-4xl font-bold mt-2">{weather.temp}°C</p>
                  </div>
                  <div className="text-5xl text-blue-400">
                  <img
                   src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                    />

                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-gray-600">Humidity</p>
                    <p className="font-semibold">{weather.humidity}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Wind</p>
                    <p className="font-semibold">{weather.wind} km/h</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Feels Like</p>
                    <p className="font-semibold">{weather.feelsLike}°C</p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      }