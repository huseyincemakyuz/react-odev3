import {createContext, useState} from "react";
import cities from "./cityList";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState(cities[60]);
    const [weatherData, setWeatherData] = useState ([])
    const [videoData, setVideoData] = useState("sunny");
    const values = {
        city,
        setCity,
        cities,
        weatherData,
        setWeatherData, 
        videoData,
        setVideoData,
    };
    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider> 
    )
}

export default WeatherContext;