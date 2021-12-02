import { useContext, useEffect } from "react";
import WeatherContext from "../../context/weathercontext";

function Container() {
    const API_key = process.env.REACT_APP_API_KEY;
    console.log("API", API_key)
    const { city, weatherData, setWeatherData } =
      useContext(WeatherContext);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    useEffect(() => {
      const getWeather = async () => {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_key}`
        );
        const res = await api_call.json();
        setWeatherData(res.daily);
        // setVideoData(res.daily[0].weather[0].main);
      };
      getWeather();
    }, [city, setWeatherData, API_key]);
  
    return (
      <div className="weathercardscontainer">
        {weatherData &&
          weatherData.map((oneDay, i) => {
            return (
              <div className="dayCard" key={i}>
                <p>{days[new Date(oneDay.dt * 1000).getDay()]}</p>
                <div>
                  <img
                    className="myWeatherImg"
                    src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />
                </div>
                <p className="tempParagrafi">
                  <span>{Math.round(oneDay.temp.min)}&#176;</span>
                  <span>{Math.round(oneDay.temp.max)}&#176;</span>
                </p>
              </div>
            );
          })}
      </div>
    );
  }
  
  export default Container;
