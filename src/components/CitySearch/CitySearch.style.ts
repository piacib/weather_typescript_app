import styled from "styled-components";

export const CitySearchContainer = styled.div`
  background: white;
  border-radius: 40px;
  margin: 0 auto;
  padding: 10px;
  max-width: 800px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;
export const CitySearchInput = styled.input`
  border: none;
  font-size: 2rem;
  width: 90%;
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileM}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    font-size: 1.2rem;
  }
`;
