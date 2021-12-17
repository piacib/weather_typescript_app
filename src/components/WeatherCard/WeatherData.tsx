import React from 'react';

import {
    WeatherDataContainer,
Rain,
Humidity,
Snow,
WindSpeed,
Pressure
} from './WeatherData.style'
interface WeatherDataProps {
    rain: number;
    humidity: number;
    snow: number;
    pressure: number;
    windSpeed:  number;

    
}
export const WeatherData:React.FC<WeatherDataProps> = ({
    rain,
    humidity,
    snow,
    pressure,
    windSpeed
    }) => {
    return <WeatherDataContainer>
              <Rain>{rain}</Rain>
              <Humidity>{humidity}</Humidity>
              <WindSpeed>{windSpeed}</WindSpeed>
              <Snow>{snow}</Snow>
              <Pressure>{pressure}</Pressure>
            </WeatherDataContainer>
}