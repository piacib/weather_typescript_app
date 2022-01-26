export interface AutocompleteOptionsFilterTypes {
  options: string[];
  filter: string;
  optionsDisplayLength: number;
}
export const autocompleteOptionsFilter = ({
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
