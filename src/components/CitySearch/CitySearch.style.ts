import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const CitySearchContainer = styled.div`
  background: white;
  height: 2rem;
  border-radius: 40px;
  margin: 0 auto;
  padding: 10px;
  max-width: 400px;
  display: flex;
  align-items: center;
  width: 100%;
  /* position: relative; */
`;
export const CitySearchInput = styled.input`
  border: none;
  font-size: 1.3rem;
  width: 90%;
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileM}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    font-size: 0.9rem;
  }
`;
