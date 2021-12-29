import styled from "styled-components";
export const WeatherDataContainer= styled.div`
    display: grid;
    grid-template-columns: 140px 140px;
    grid-row-gap: 15px;
    max-width: 400px;
    border-top: 1px solid ${props => props.theme.fontColor};
`
export const DataDisplayContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => props.theme.dataSvgSize}px auto;
    height: ${props => props.theme.dataSvgSize}px;
    font-size: .666rem ;
`
export const DataTextContainer = styled.div`
`
export const DataNumberDisplay = styled.div``