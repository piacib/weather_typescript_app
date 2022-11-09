import styled from "styled-components";
import { AutoComplete, AutoCompleteContainer } from "./AutoComplete";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const MagnifyingGlassImage = styled.img`
  width: ${(props) =>
    props.theme.citySearchContainer.widthMagnifyingGlassImage}; ;
`;
export const CitySearchContainer = styled.div`
  background: white;
  height: 2rem;
  border-radius: 40px;
  margin: 0 auto;
  padding: ${(props) => props.theme.citySearchContainer.padding};
  max-width: 400px;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const CitySearchInput = styled.input`
  border: none;
  font-size: 1rem;
  width: 90%;
  :focus + ${AutoCompleteContainer} {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    font-size: 0.9rem;
  }
`;
// WeatherDateToggle
export const WeatherDateToggle = styled.select`
  margin: 10px auto;
  border-radius: 40px;
  padding: 8px;
`;
export const DateToggleButton = styled.option``;
