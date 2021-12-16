import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { WeatherData } from '../WeatherCard/WeatherData'
import {
    CitySearchContainer
} from './CitySearch.style'
const weatherCardTestObject = {
    dayOfTheWeek:'Sunday',
    todaysDate: 'Nov 14',
    windSpeed:3.7, 
    rain:74,
    humidity:83,
    pressure: 1010,
    snow:0,
    temperature:24,
    weatherDescription:'Heavy Rain',
}
const CitySearch = () => {
    return (
        <CitySearchContainer>

            <WeatherCard 
                dayOfTheWeek= {weatherCardTestObject.dayOfTheWeek}
                todaysDate= {weatherCardTestObject.todaysDate}
                windSpeed = {weatherCardTestObject.windSpeed}
                temperature = {weatherCardTestObject.temperature}
                weatherDescription = {weatherCardTestObject.weatherDescription}
                >
                    <WeatherData                 
                        rain = {weatherCardTestObject.rain}
                        humidity = {weatherCardTestObject.humidity}
                        pressure = {weatherCardTestObject.pressure}
                        snow = {weatherCardTestObject.snow}/>
                </WeatherCard>
            
        </CitySearchContainer>
    )
}

export default CitySearch
