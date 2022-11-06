import styled from "styled-components";

export const ForecastHourlyContainer = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;
const borderSize = "3px";
export const ForecastHourlyEntryDisplay = styled.li`
  display: flex;
  flex-direction: column;
  width: 5.6rem;
  margin: 0 0.5rem;
  border-left: 1px solid white;
  margin-top: ${borderSize};
  &:hover {
    margin-top: 0;
    border-top: ${borderSize} solid green;
  }
`;
export const Time = styled.h3`
  height: 1.3rem;
  line-height: 1.3rem;
  white-space: nowrap;
`;
export const Temperature = styled.p``;
export const Forecast = styled.p`
  width: 40char;
`;
