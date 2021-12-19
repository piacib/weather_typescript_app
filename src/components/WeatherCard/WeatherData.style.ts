import styled from "styled-components";
export const WeatherDataContainer= styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr 2fr) ;

border-top: 1px solid ${props => props.theme.fontColor};
`
export const Rain = styled.div``
export const Humidity = styled.div``
export const Snow = styled.div``
export const Temperature = styled.div``
export const Pressure = styled.div`
grid-column: 2;
`
export const WindSpeed = styled.div`
grid-column: 2;
`

