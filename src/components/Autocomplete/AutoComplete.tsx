import React from "react";
import {
  autocompleteOptionsFilter,
  AutocompleteOptionsFilterTypes,
} from "./Autocomplete.functions";
import { AutoCompleteContainer, Option } from "./Autocomplete.style";

interface AutoCompleteProps extends AutocompleteOptionsFilterTypes {
  optionSelectFunction: any;
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
