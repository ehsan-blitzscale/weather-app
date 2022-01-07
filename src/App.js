
import { useReducer, useState } from 'react';
import './App.css';
import { SearchCity } from './WeatherComponents/SearchCity';
import {AppTitle} from './WeatherComponents/AppTitle'
import { WeatherCard } from './WeatherComponents/WeatherCard';

function App() {
  const [value, setValue] = useState('');
  const initialState = { 
  city:'',
  country: '',
  description: '',
  main: '',
  temp: '',
  highestTemp: '',
  lowestTemp: '',
  clouds: '',
  humidity: '',
  wind: '',
  forecast: null}
  const [weatherInfo, setWeatherInfo] = useReducer((state,update)=>({
    ...state,
    ...update,
  }),
  initialState
  );
  const [error,setError] = useState(false);
  const[clicked,setClicked] =useState(false);

  const handleInputChange = e =>{
    setValue(e.target.value);
  }
  const handleSearchCity = e =>{
    e.preventDefault();
    const apiKey =  'f2ac41f92606260041f3e5097b343144';
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
  
    Promise.all([fetch(weather),fetch(forecast)])
    .then(([res1,res2])=>{
      if(res1.ok && res2.ok){
        return Promise.all([res1.json(),res2.json()]);
      }
    })
    .then(([data1,data2]) =>{
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Nocvember',
        'December',
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDate = new Date();
      const date = `${days[currentDate.getDay()]}  ${currentDate.getDate()} ${months[currentDate.getMonth()]}` ;
      const sunset = new Date (data1.sys.sunset *1000).toLocaleTimeString().slice(0,4);
      const sunrise = new Date(data1.sys.sunrise*1000).toLocaleTimeString().slice(0,4);
    
      setWeatherInfo({
        city: data1.name,
        country: data1.sys.country,
        date,
        description: data1.weather[0].description,
        main: data1.weather[0].main,
        temp: data1.main.temp,
        highestTemp: data1.main.temp_max,
        lowestTemp: data1.main.temp_min,
        sunrise,
        sunset,
        clouds: data1.clouds.all,
        humidity: data1.main.humidity,
        wind: data1.wind.speed,
        forecast: data2.list,
      });
      
    })
    .catch(error=>{
      console.log(error);
      setError(true);
      setWeatherInfo(null);
    });
    setClicked(true);
  }

  return (
    <div className='main'>
      <AppTitle/>
      <SearchCity
      value ={value}
      change = {handleInputChange}
      submit = {handleSearchCity}
      />
     {weatherInfo && clicked && <WeatherCard {...weatherInfo}/>}
    </div>
  );
}

export default App;
