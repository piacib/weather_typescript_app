import React from "react";
import styled from "styled-components";
export const AutoCompleteContainer = styled.div`
  width: 15em;
  margin: 0 56px;
  background-color: green;
  position: absolute;
  top: calc(
    ${(props) => props.theme.citySearchContainer.height} +
      calc(${(props) => props.theme.citySearchContainer.padding} * 2)
  );
`;
export const Option = styled.div`
  cursor: pointer;
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
    <AutoCompleteContainer>
      {autocompleteOptionsFilter({
        options: options,
        filter: filter,
        optionsDisplayLength: optionsDisplayLength,
      }).map((x) => (
        <Option onClick={() => optionSelectFunction(x)}>{x}</Option>
      ))}
    </AutoCompleteContainer>
  );
};
