import { useContext } from "react";
import WeatherContext from "../../context/weathercontext";

function Select() {
    const {city, setCity, cities} = useContext(WeatherContext);

    let citiesList =
    cities.length > 0 &&
    cities.map((item, i) => {
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    }, this);
 
    const setMe = (e) =>{
        for (let i = 0; i < cities.length; i++) {
            if(e.target.value === cities[i].name){
                setCity(cities[i]);
            }
        }
    } 

    return (
        <div className="headerContainer">
          <select value={city.name} onChange={setMe} className="citySelect">{citiesList}</select>
        </div>
      );
}

export default Select;

