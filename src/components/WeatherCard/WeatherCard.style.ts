import styled from "styled-components";

export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const WeatherCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const WhiteLine = styled.div`
    width:3px; 
    height: 21px;
    margin: 0 5px;
    background-color: ${props => props.theme.fontColor};
`
export const Date = styled.div``
export const WeekDate = styled.div``
export const WindSpeed = styled.div``
export const Rain = styled.div``
export const Humidity = styled.div``
export const Snow = styled.div``
export const Temperature = styled.div`
    font-size: 4rem;
`
export const Pressure = styled.div``
export const WeatherDescription = styled.div``