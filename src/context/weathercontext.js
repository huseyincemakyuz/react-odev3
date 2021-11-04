import {createContext} from "react";
import cities from "./cityList";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    return(
        <weatherContext.Provider value={values}> {children} </weatherContext.Provider>
    )
}