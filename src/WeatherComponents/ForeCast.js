import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faCloud, faSmog } from '@fortawesome/free-solid-svg-icons';



export const ForeCast = (data) => {

console.log(data);
const forecast = data.forecast;



  return (
    <div className='forecast'>
      <h1 className='forHead  tempUpFont'>Forecast</h1>
      <div className="forecastICard">
      {forecast.map((item)=>{
        const icon = item.weather[0].main;
        const time = new Date(item.dt).toLocaleTimeString().slice(0,4);
        const date = item.dt_txt.slice(5,10);
        const temp = Math.round(item.main.temp -273);        
          let weatherIcon = null;
          if ({icon} === 'Thunderstorm') {
              weatherIcon = <FontAwesomeIcon icon={faBolt} />;
            } else if ({icon} === 'Drizzle') {
              weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
            } else if ({icon} === 'Rain') {
              weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
            } else if ({icon} === 'Snow') {
              weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
            } else if ({icon} === 'Clear') {
              weatherIcon = <FontAwesomeIcon icon={faSun} />;
            } else if ({icon} === 'Clouds') {
              weatherIcon = <FontAwesomeIcon icon={faCloud} />;
            } else {
              weatherIcon = <FontAwesomeIcon icon={faSmog} />;
            }

      return(
         <div className="forecastCard">
         <div>{date}</div>
         <div>{time}</div>
         <div>{weatherIcon}</div>
         <div>{temp}&#176;</div>
       </div>
        )
      })}
     </div>
    </div>
  )
}


