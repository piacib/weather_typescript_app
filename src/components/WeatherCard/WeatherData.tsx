import React from 'react';

import {
    WeatherDataContainer,
Rain,
Humidity,
Snow,
Pressure
} from './WeatherData.style'
interface WeatherDataProps {
    rain: number;
    humidity: number;
    snow: number;
    pressure: number;
    
}
export const WeatherData:React.FC<WeatherDataProps> = ({
    rain,
    humidity,
    snow,
    pressure,
    }) => {
    return <WeatherDataContainer>
    <Rain>{rain}</Rain>
    <Humidity>{humidity}</Humidity>
    <Snow>{snow}</Snow>
    <Pressure>{pressure}</Pressure>
</WeatherDataContainer>
}