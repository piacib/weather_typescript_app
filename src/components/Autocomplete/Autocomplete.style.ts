import styled from "styled-components";
export const AutoCompleteContainer = styled.div`
  width: 11rem;
  padding-bottom: 0.25rem;
  border-radius: 0 0 12px 12px;
  margin: 0
    ${(props) => props.theme.citySearchContainer.widthMagnifyingGlassImage};
  background-color: white;
  color: black;
  position: absolute;

  top: calc(
    ${(props) => props.theme.citySearchContainer.height} +
      calc(${(props) => props.theme.citySearchContainer.padding} * 2)
  );
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileM}) {
    width: 10rem;
  }
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    width: 8rem;
  }
`;
export const Option = styled.div`
  cursor: pointer;
  padding-left: 4px;
  :hover {
    background-color: blue;
  }
`;
