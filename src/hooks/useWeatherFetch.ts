import { useState, useEffect } from "react";
import isDevModeConsoleLog from "../utils/isDevModeConsoleLog";
export type statusType = "idle" | "searching" | "loaded" | "failed";
export type ForecastEntry = {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: null | string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
};
export type WeatherDataArray = ForecastEntry[];
export type latLangUrlInput = {
  lat: number;
  lng: number;
};
const idle = "idle";
const searching = "searching";
const loaded = "loaded";
const failed = "failed";

const latLangURL = (coordinates: latLangUrlInput) => {
  // Api endpoint to get weather.gov grid id
  return `https://api.weather.gov/points/${coordinates.lat},${coordinates.lng}`;
};

export const useWeatherFetch = (coordinates: latLangUrlInput) => {
  isDevModeConsoleLog("updating useWeatherFetch");
  const [weatherDaily, setWeatherDaily] = useState<WeatherDataArray>([]);
  const [status, setStatus] = useState<statusType>(idle);
  const [weatherHourly, setWeatherHourly] = useState<WeatherDataArray>([]);
  useEffect(() => {
    const apiCalls = async () => {
      try {
        // early exit condition if no coordinates are provided
        if (!coordinates.lat || !coordinates.lng) {
          return;
        }
        setStatus(searching);
        // uses coordinates of city being searched to return the grid value of the coordinates
        //  this is done because the weather api only returns weather inside a prespecified grid area
        //  so city data mustbe converted to coordinates and then to a gridX and gridY value
        //  for the weather api
        console.log(latLangURL(coordinates));
        const gridFetch = await fetch(latLangURL(coordinates), {});

        if (gridFetch.status === 500) {
          setStatus(failed);
        }
        if (gridFetch.ok) {
          const gridJSON = await gridFetch.json();
          isDevModeConsoleLog("fetching weather data");
          // fetches weather data for grid data fetched above
          const weatherFetch = await fetch(
            gridJSON.properties.forecast
          );
          const weatherFetchHourly = await fetch(
            gridJSON.properties.forecastHourly
          );
          if (weatherFetch.status === 500) {
            setStatus(failed);
          }
          if (weatherFetch.ok) {
            const weatherJSON = await weatherFetch.json();
            const weatherHourlyJSON = await weatherFetchHourly.json();
            setWeatherDaily(weatherJSON.properties.periods);
            setWeatherHourly(weatherHourlyJSON.properties.periods);
            setStatus(loaded);
          }
        }
      } catch {
        setStatus(failed);
      }
    };
    apiCalls();
  }, [coordinates]);
  return { weatherDaily, weatherHourly, status };
};
