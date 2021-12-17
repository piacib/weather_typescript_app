import React, { useState } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { WeatherData } from '../WeatherCard/WeatherData'
import useGeoLocation from '../../hooks/useGeolocation'
import magnifyingGlass from './magnifying-glass.svg'
import {
    CitySearchContainer,
    CitySearchInput
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
    const [city, setCity] = useState<string>('')
    const {location, } = useGeoLocation()
    const {lat, lng} = location.coordinates
    
    const defaultPlaceHolder = 'Search your city';
    const locationFoundPlaceHolder = 'Press search to use your location';

    return (
        <>
        <CitySearchContainer>
            
            <img src={magnifyingGlass} alt='Magnifying glass' />
            <CitySearchInput value={city} onChange={(e) => setCity(e.target.value)} placeholder={(!lat && !lng) ? defaultPlaceHolder: locationFoundPlaceHolder} type='text'/>
        </CitySearchContainer>

            <WeatherCard 
                dayOfTheWeek= {weatherCardTestObject.dayOfTheWeek}
                todaysDate= {weatherCardTestObject.todaysDate}
                temperature = {weatherCardTestObject.temperature}
                weatherDescription = {weatherCardTestObject.weatherDescription}
                >
                    <WeatherData                 
                        rain = {weatherCardTestObject.rain}
                        humidity = {weatherCardTestObject.humidity}
                        pressure = {weatherCardTestObject.pressure}
                        snow = {weatherCardTestObject.snow}
                        windSpeed = {weatherCardTestObject.windSpeed}/> 
            </WeatherCard>
        </>
    )
}

export default CitySearch
