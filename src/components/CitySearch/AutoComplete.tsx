import React from "react";
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
interface AutocompleteOptionsFilterTypes {
  options: string[];
  filter: string;
  optionsDisplayLength: number;
}
const autocompleteOptionsFilter = ({
  options,
  filter,
  optionsDisplayLength = 8,
}: AutocompleteOptionsFilterTypes) => {
  //  takes in an array of options and matches
  //  to the filter and returns array of length
  //  optionsDisplayLength. if the only return value matches
  //  filter an empty array is returned
  const displayOptions = options
    .filter((option) => option.toLowerCase().includes(filter.toLowerCase()))
    .slice(0, optionsDisplayLength);
  if (displayOptions.length === 1 && displayOptions[0] === filter) {
    return [];
  }
  return displayOptions;
};

interface AutoCompleteProps extends AutocompleteOptionsFilterTypes {
  optionSelectFunction: any;
  onClick: (e: Event) => void;
}
export const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  filter,
  optionsDisplayLength = 8,
  optionSelectFunction,
}) => {
  return (
    <>
      {autocompleteOptionsFilter({
        options: options,
        filter: filter,
        optionsDisplayLength: optionsDisplayLength,
      }).length > 0 ? (
        <AutoCompleteContainer>
          {autocompleteOptionsFilter({
            options: options,
            filter: filter,
            optionsDisplayLength: optionsDisplayLength,
          }).map((x) => (
            <Option onClick={() => optionSelectFunction(x)}>{x}</Option>
          ))}
        </AutoCompleteContainer>
      ) : null}
    </>
  );
};
