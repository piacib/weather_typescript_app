import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherData } from "../WeatherCard/WeatherData";
import magnifyingGlass from "./magnifying-glass.svg";
import {
  Container,
  CitySearchContainer,
  CitySearchInput,
} from "./CitySearch.style";
import { AutoComplete } from "./AutoComplete";
import { Coordinates } from "./CitySearch.types";
import { useWeatherFetch } from "../../hooks/useWeatherFetch";
import useGeoLocation from "../../hooks/useGeolocation";

type CityEntry = {
  key: number;
  value: string;
  text: string;
  longitude: number;
  latitude: number;
};
const usCities: CityEntry[] = require("./usCities.json");
const usCityName = usCities.map((entry) => entry.text);

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
const CitySearch = () => {
  const { location, status: geoLocationStatus } = useGeoLocation();
  const [city, setCity] = useState<string>("");
  const [searchedLocation, setSearchedLocation] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });
  const [autocompleteVisible, setAutocompleteVisible] =
    useState<boolean>(false);
  const [autocompleteSelected, setAutocompleteSelected] =
    useState<boolean>(false);
  const [inputSelected, setInputSelected] = useState<boolean>(false);
  const {
    weatherDaily,
    weatherHourly,
  } = useWeatherFetch(searchedLocation);
  const date = weatherDaily[0]
    ? new Date(weatherDaily[0].startTime)
    : new Date();
  useEffect(() => {
    console.log("checking city");
    const result = usCities.find((usCity) => usCity.text === city);
    if (result) {
      console.log("searching input");
      setSearchedLocation({ lat: result.latitude, lng: result.longitude });
    } else if (geoLocationStatus === "loaded") {
      console.log("searching geo");
      if (
        location.lat !== searchedLocation.lat &&
        location.lng !== searchedLocation.lng
      ) {
        setSearchedLocation(location);
      }
    }
  }, [city, geoLocationStatus, location]);
  console.log("_____");
  return (
    <Container>
      <CitySearchContainer>
        <img src={magnifyingGlass} alt="Magnifying glass" />
        <CitySearchInput
          value={city}
          onFocus={(e) => {
            console.log("input selected");
            setInputSelected(true);
            setAutocompleteSelected(false);
            setAutocompleteVisible(true);
          }}
          onBlur={(e) => {
            setInputSelected(false);
            if (autocompleteSelected) {
              // setAutocompleteVisible(false);
            }
          }}
          onChange={(e) => setCity(e.target.value)}
          placeholder={
            !location.lat && !location.lng
              ? defaultPlaceHolder
              : locationFoundPlaceHolder
          }
          type="text"
        />
        {inputSelected || autocompleteVisible ? (
          <AutoComplete
            onClick={(e) => {
              console.log("autocomplete selected");
              setAutocompleteSelected(true);
            }}
            options={usCityName}
            filter={city}
            optionsDisplayLength={8}
            optionSelectFunction={(x: string) => {
              console.log("option selected");
              setCity(x);
              setAutocompleteVisible(false);
              setAutocompleteSelected(true);
            }}
          />
        ) : null}
      </CitySearchContainer>

      {weatherDaily && weatherDaily[0] ? (
        <WeatherCard
          dayOfTheWeek={weekday[date.getDay()]}
          todaysDate={`${month[date.getMonth()]} ${date.getDate()}`}
          temperature={weatherDaily[0].temperature}
          weatherDescription={weatherDaily[0].shortForecast}
        />
      ) : (
        <WeatherExampleCard />
      )}
    </Container>
  );
};

export default CitySearch;
