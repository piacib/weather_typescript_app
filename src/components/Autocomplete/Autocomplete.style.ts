import styled from "styled-components";
export const AutoCompleteContainer = styled.select`
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
`;
export const Option = styled.option`
  cursor: pointer;
  padding-left: 4px;
  :hover {
    background-color: blue;
  }
`;
export const AutocompleteForm = styled.form`
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileM}) {
    width: 10rem;
  }
  @media (max-width: ${(props) => props.theme.mediaSizes.mobileS}) {
    width: 7rem;
  }
`;
export const AutocompleteInput = styled.input`
  border: none;
`;
export const AutocompleteList = styled.datalist``;
export const AutocompleteOption = styled.option``;
