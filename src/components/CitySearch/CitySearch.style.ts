import styled from "styled-components";

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
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    font-size: 0.9rem;
  }
`;
export const InputAutoContainer = styled.div``;
