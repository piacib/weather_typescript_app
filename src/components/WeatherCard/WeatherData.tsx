import React from 'react';
import SvgSprite from '../SvgSpriteLoader';

import {
    WeatherDataContainer,
DataDisplayContainer,
DataTextContainer,
DataNumberDisplay
} from './WeatherData.style';
import theme from '../../theme';
interface WeatherDataProps {
    rain: number;
    humidity: number;
    snow: number;
    pressure: number;
    windSpeed:  number;
    windUnits:  string;
    pressureUnits:  string;
}

const svgSize = theme.dataSvgSize ;
const WindSVG = () => (
    <SvgSprite 
                    width={svgSize}
                    height={svgSize}
                    type='static' 
                    image='wind'
                    style={{gridRow:'span 2', alignSelf:'center'}}
                    />
                
)
const RainSVG = () => (
    <SvgSprite 
                    width={svgSize}
                    height={svgSize}
                    type='static' 
                    image='rain'
                    style={{gridRow:'span 2', alignSelf:'center'}}
                    />
                
)
const PressureSVG = () => (
    <SvgSprite 
                    width={svgSize}
                    height={svgSize}
                    type='static' 
                    image='pressure'
                    style={{gridRow:'span 2', alignSelf:'center'}}

                    />
                
)
const HumiditySVG = () => (
    <SvgSprite 
                    width={svgSize}
                    height={svgSize}
                    type='static' 
                    image='humidity'
                    style={{gridRow:'span 2', alignSelf:'center'}}
                    />
                
)
export const WeatherData:React.FC<WeatherDataProps> = ({
    rain,
    humidity,
    snow,
    pressure,
    pressureUnits,
    windSpeed,
    windUnits
}) => {
    return (
        <WeatherDataContainer>
            <DataDisplayContainer>
                <WindSVG />
                <DataNumberDisplay>{windSpeed} {windUnits}</DataNumberDisplay>
                <DataTextContainer>Wind</DataTextContainer>
            </DataDisplayContainer>
            <DataDisplayContainer>
                <RainSVG />
                <DataNumberDisplay>{rain}%</DataNumberDisplay>
                <DataTextContainer>Chance of Rain</DataTextContainer>
            </DataDisplayContainer>
            <DataDisplayContainer>
                <PressureSVG />
                <DataNumberDisplay>{pressure} {pressureUnits}</DataNumberDisplay>
                <DataTextContainer>Pressure</DataTextContainer>
            </DataDisplayContainer>
            <DataDisplayContainer>
                <HumiditySVG />
                <DataNumberDisplay>{humidity}%</DataNumberDisplay>
                <DataTextContainer>Humidity {humidity}%</DataTextContainer>
            </DataDisplayContainer>
        </WeatherDataContainer>
)}