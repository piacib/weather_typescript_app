import styled from "styled-components";

export const ForecastHourlyContainer = styled.ul``;
export const ForecastHourlyEntryDisplay = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 3rem 4rem auto;
  grid-gap: 0.4rem;
`;
export const Time = styled.div``;
export const Temperature = styled.div``;
export const Forecast = styled.div`
  width: fit-content;
  white-space: nowrap;
`;
