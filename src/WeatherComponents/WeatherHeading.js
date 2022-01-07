import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt,faCloudRain,faCloudShowersHeavy,faSnowflake,faSun,faCloud,faSmog } from '@fortawesome/free-solid-svg-icons';


export const WeatherHeading = ({city,country,date,icon,temp,conditions}) => {
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
    return (
        <div  className="mainWeatherHeading">
            <div>
            <p className='weatherHeading'>{city},{country}</p>
            <p className='date'>{date}</p>
            </div>
            <div className="weatherConditions">
                <span className='weatherIcon'>{weatherIcon}</span>
                <div>
                <h3 className='temp'>{Math.floor(temp-273)}&#176;</h3>
                <p className='condition'>{conditions}</p>
                </div>
            </div>
        </div>
    )
}
