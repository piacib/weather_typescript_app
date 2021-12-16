import React from 'react'
import {
    WeatherCardContainer,
    Date,
    WeekDate,
    WindSpeed,
    Rain,
    Humidity,
    Snow,
    Temperature,
    Pressure,
    WeatherDescription
} from './WeatherCard.style'
interface WeatherDisplayProps {
    dayOfTheWeek: string;
    todaysDate: string;
    windSpeed:  number;
    rain: number;
    humidity: number;
    snow: number;
    temperature: number;
    pressure:number;
    weatherDescription: string;
}

const WeatherCard:React.FC<WeatherDisplayProps> = ({
    dayOfTheWeek,
    todaysDate,
    windSpeed,
    rain,
    humidity,
    snow,
    pressure,
    temperature,
    weatherDescription 
}) => {
    return (
        <WeatherCardContainer>
            <Date>{dayOfTheWeek}</Date>
            <WeekDate>{todaysDate}</WeekDate>
            <WindSpeed>{windSpeed}</WindSpeed>
            <WeatherData>
            <Rain>{rain}</Rain>
                <Humidity>{humidity}</Humidity>
                <Snow>{snow}</Snow>
                <Pressure>{pressure}</Pressure>
            </WeatherData>
            <Temperature>{temperature}</Temperature>
            <WeatherDescription>{weatherDescription}</WeatherDescription>


        </WeatherCardContainer>
    )
}

export default WeatherCard