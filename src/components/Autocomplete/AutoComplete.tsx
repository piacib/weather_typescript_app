import React from "react";
import {
  autocompleteOptionsFilter,
  AutocompleteOptionsFilterTypes,
} from "./Autocomplete.functions";
import {
  AutocompleteForm,
  AutocompleteInput,
  AutocompleteList,
  AutocompleteOption,
} from "./Autocomplete.style";
const listId = "autocompleteList";
interface AutoCompleteProps extends AutocompleteOptionsFilterTypes {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  placeholderText?: string;
}
export const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  filter,
  inputValue,
  setInputValue,
  placeholderText,
  optionsDisplayLength,
}) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <AutocompleteForm onSubmit={(e) => handleSubmit(e)}>
      <AutocompleteInput
        type="search"
        placeholder={placeholderText}
        list={listId}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <AutocompleteList id={listId}>
        {autocompleteOptionsFilter({
          options: options,
          filter: filter,
          optionsDisplayLength: optionsDisplayLength,
        }).map((x) => (
          <AutocompleteOption>{x}</AutocompleteOption>
        ))}
      </AutocompleteList>
    </AutocompleteForm>
  );
};
