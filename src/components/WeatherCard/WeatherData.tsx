import React from 'react';
import SvgSprite from '../SvgSpriteLoader';

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
const WindSVG = () => (
    <SvgSprite 
                    width={32}
                    height={32}
                    type='static' 
                    image='rainy-6'/>
                
)
const RainSVG = () => (
    <SvgSprite 
                    width={32}
                    height={32}
                    type='static' 
                    image='rainy-6'/>
                
)
const PressureSVG = () => (
    <SvgSprite 
                    width={32}
                    height={32}
                    type='static' 
                    image='rainy-6'/>
                
)
const HumiditySVG = () => (
    <SvgSprite 
                    width={32}
                    height={32}
                    type='static' 
                    image='rainy-6'/>
                
)
export const WeatherData:React.FC<WeatherDataProps> = ({
    rain,
    humidity,
    snow,
    pressure,
    windSpeed
    }) => {
    return (
            <WeatherDataContainer>
                <WindSVG />
                <WindSpeed>{windSpeed}</WindSpeed>
                <RainSVG />
                <Rain>{rain}</Rain>
                <PressureSVG />
                <Pressure>{pressure}</Pressure>
                <HumiditySVG />
                <Humidity>{humidity}</Humidity>
            </WeatherDataContainer>
)}