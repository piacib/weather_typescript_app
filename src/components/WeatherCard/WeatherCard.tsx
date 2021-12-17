import React from 'react'
import {
    WeatherCardContainer,
    Date,
    WeekDate,
    Temperature,
    DateContainer,
    WhiteLine,
    WeatherDescription
} from './WeatherCard.style'

interface WeatherDisplayProps {
    dayOfTheWeek: string;
    todaysDate: string;
    temperature: number;
    weatherDescription: string;
}

const WeatherCard:React.FC<WeatherDisplayProps> = ({
    dayOfTheWeek,
    todaysDate,
    temperature,
    weatherDescription 
}) => {
    return (
        <WeatherCardContainer>
            <DateContainer>

            <Date>{dayOfTheWeek}</Date>
            <WhiteLine/>
            <WeekDate>{todaysDate}</WeekDate>
            </DateContainer>
            <Temperature>{temperature}</Temperature>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
        </WeatherCardContainer>
    )
}

export default WeatherCard