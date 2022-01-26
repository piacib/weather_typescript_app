import React from "react";
import {
  Forecast,
  ForecastHourlyContainer,
  ForecastHourlyEntryDisplay,
  Temperature,
  Time,
} from "./ForecastHourly.style";
import { WeatherDataArray } from "../../hooks/useWeatherFetch";

const convertTime = (time: string) => {
  const hour = new Date(time).getHours();
  if (hour === 12) {
    return `${hour}pm`;
  }
  if (hour === 0) {
    return `12am`;
  }
  if (hour < 12) {
    return `${hour}am`;
  }

  return `${hour - 12}pm`;
};
interface ForecastHourlyProps {
  forecastHourlyArray: WeatherDataArray;
  startEntry?: number;
}
const ForecastHourly: React.FC<ForecastHourlyProps> = ({ forecastHourlyArray, startEntry = 0 }) => {
  return (
    <ForecastHourlyContainer>
      {forecastHourlyArray
        ? forecastHourlyArray.slice(startEntry + 1, startEntry + 13).map((entry) => (
            <ForecastHourlyEntryDisplay key={entry.number}>
              <Time>{convertTime(entry.startTime)}</Time>
              <Temperature>
                {entry.temperature}
                <span>&#176;</span>
              </Temperature>
              <Forecast>{entry.shortForecast}</Forecast>
            </ForecastHourlyEntryDisplay>
          ))
        : null}
    </ForecastHourlyContainer>
  );
};

export default ForecastHourly;
