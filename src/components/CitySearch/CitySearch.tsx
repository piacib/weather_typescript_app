import React, { useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherData } from "../WeatherCard/WeatherData";
import magnifyingGlass from "./magnifying-glass.svg";
import { CitySearchContainer, CitySearchInput } from "./CitySearch.style";
import { Coordinates } from "./CitySearch.types";
const weatherCardTestObject = {
  dayOfTheWeek: "Sunday",
  todaysDate: "Nov 14",
  windSpeed: 3.7,
  rain: 74,
  humidity: 83,
  pressure: 1010,
  snow: 0,
  temperature: 24,
  weatherDescription: "Heavy Rain",
  windUnits: "km/h",
  pressureUnits: "mbar",
};
const defaultPlaceHolder = "Search your city";
const locationFoundPlaceHolder = "Press search to use your location";

const WeatherExampleCard = () => {
  return (
    <>
      <WeatherCard
        dayOfTheWeek={weatherCardTestObject.dayOfTheWeek}
        todaysDate={weatherCardTestObject.todaysDate}
        temperature={weatherCardTestObject.temperature}
        weatherDescription={weatherCardTestObject.weatherDescription}
      ></WeatherCard>
      <WeatherData
        rain={weatherCardTestObject.rain}
        humidity={weatherCardTestObject.humidity}
        pressure={weatherCardTestObject.pressure}
        snow={weatherCardTestObject.snow}
        windSpeed={weatherCardTestObject.windSpeed}
        windUnits={weatherCardTestObject.windUnits}
        pressureUnits={weatherCardTestObject.pressureUnits}
      />
    </>
  );
};
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface CitySearchInputProps {
  coordinates: Coordinates;
  weatherDaily: any;
  weatherHourly: any;
}
const CitySearch: React.FC<CitySearchInputProps> = ({
  coordinates,
  weatherDaily,
  weatherHourly,
}) => {
  const [city, setCity] = useState<string>("");
  const date = weatherDaily[0]
    ? new Date(weatherDaily[0].startTime)
    : new Date();

  return (
    <>
      <CitySearchContainer>
        <img src={magnifyingGlass} alt="Magnifying glass" />
        <CitySearchInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={
            !coordinates.lat && !coordinates.lng
              ? defaultPlaceHolder
              : locationFoundPlaceHolder
          }
          type="text"
        />
      </CitySearchContainer>
      {weatherDaily && weatherDaily[0] ? (
        <>
          <WeatherCard
            dayOfTheWeek={weekday[date.getDay()]}
            todaysDate={`${month[date.getMonth()]} ${date.getDate()}`}
            temperature={weatherDaily[0].temperature}
            weatherDescription={weatherDaily[0].shortForecast}
          ></WeatherCard>
        </>
      ) : (
        <WeatherExampleCard />
      )}
    </>
  );
};

export default CitySearch;
