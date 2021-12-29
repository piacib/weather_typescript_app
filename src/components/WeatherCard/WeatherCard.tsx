import React from 'react'
import SvgSprite from '../../utils/SvgSpriteLoader'
import {
    WeatherCardContainer,
    Date,
    WeekDate,
    Temperature,
    DateContainer,
    WhiteLine,
    WeatherDescription
} from './WeatherCard.style'
import { WeatherData } from './WeatherData'

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
            <SvgSprite type='static' image='rainy-1'/>
            <DateContainer>
            <Date>{dayOfTheWeek}</Date>
            <WhiteLine/>
            <WeekDate>{todaysDate}</WeekDate>
            </DateContainer>
            <Temperature>{temperature}<span>&#176;</span></Temperature>
            <WeatherDescription>{weatherDescription}</WeatherDescription>
            
        </WeatherCardContainer>
    )
}

export default WeatherCard