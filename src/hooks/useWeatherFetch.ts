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
      if (!coordinates.lat || !coordinates.lng) {
        return;
      }
      setStatus(searching);
      const gridFetch = await fetch(latLangURL(coordinates), {});
      if (gridFetch.status === 500) {
        setStatus(failed);
      }
      if (gridFetch.ok) {
        const gridJSON = await gridFetch.json();
        isDevModeConsoleLog("fetching weather data");
        const weatherFetch = await fetch(
          `https://api.weather.gov/gridpoints/${gridJSON.properties.gridId}/${gridJSON.properties.gridX},${gridJSON.properties.gridY}/forecast`
        );
        const weatherFetchHourly = await fetch(
          `https://api.weather.gov/gridpoints/${gridJSON.properties.gridId}/${gridJSON.properties.gridX},${gridJSON.properties.gridY}/forecast/hourly`
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
    };
    apiCalls();
  }, [coordinates]);
  return { weatherDaily, weatherHourly, status };
};
