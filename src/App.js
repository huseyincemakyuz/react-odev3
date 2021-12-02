import './App.css';
import Select from './components/Select/select';
import Container from './components/Container/container';
import { WeatherProvider } from "./context/weathercontext"

function App() {
  return (
    < WeatherProvider r>
      <div className="App">
          <Select />
          <Container />
         
      </div> 
    </ WeatherProvider >
    
  );
}

export default App;
