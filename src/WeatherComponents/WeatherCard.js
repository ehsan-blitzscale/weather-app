import React from 'react';
import { WeatherHeading } from './WeatherHeading';
import { TempCard } from './TempCard';
import { ForeCast } from './ForeCast';

export const WeatherCard = props => {
   
   const{city,country,date,description,main,temp,highestTemp,lowestTemp,sunrise,sunset,clouds,humidity,wind,forecast} = props;
    return (
        <div className='mainContainer'>
            <div className="leftcontainer">
            <WeatherHeading 
            city={city}
            country={country}
            date = {date}
            icon={main}
            temp ={temp}
            conditions ={description} />
            </div>
            <div className="rightContainer">
            <TempCard 
            highest={highestTemp}
            lowest = {lowestTemp}
            sunrise={sunrise}
            sunset ={sunset}
            clouds={clouds}
            humidity={humidity}
            wind={wind}/>
            </div>
            <div className="bottomContainer">
                {forecast && <ForeCast forecast ={forecast}/>}
            </div>
        </div>
    )
}
