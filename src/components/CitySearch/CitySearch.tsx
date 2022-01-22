import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import magnifyingGlass from "./magnifying-glass.svg";
import {
  Container,
  CitySearchContainer,
  CitySearchInput,
  MagnifyingGlassImage,
} from "./CitySearch.style";
import { AutoComplete } from "./AutoComplete";
import { Coordinates } from "./CitySearch.types";
import { ForecastEntry, useWeatherFetch } from "../../hooks/useWeatherFetch";
import useGeoLocation from "../../hooks/useGeolocation";
import Loading from "./Loading";
import Failed from "./Failed";
import ForecastHourly from "../ForecastHourly/ForecastHourly";

type CityEntry = {
  key: number;
  value: string;
  text: string;
  longitude: number;
  latitude: number;
};
const usCities: CityEntry[] = require("./usCities.json");
const usCityName = usCities.map((entry) => entry.text);
const defaultPlaceHolder = "Search your city";
const locationFoundPlaceHolder = "Press search to use your location";
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
  const { weatherDaily, status, weatherHourly } =
    useWeatherFetch(searchedLocation);
  const [dateDisplayed, setDateDisplayed] = useState<ForecastEntry | null>(
    null
  );
  const date = dateDisplayed ? new Date(dateDisplayed.startTime) : new Date();
  useEffect(() => {
    if (weatherDaily) {
      setDateDisplayed(weatherDaily[0]);
    }
  }, [weatherDaily]);
  // handles autocomlete visibility

  useEffect(() => {
    if (autocompleteSelected) {
      setAutocompleteVisible(false);
    } else if (inputSelected) {
      setAutocompleteVisible(true);
    }
    if (!autocompleteSelected && !inputSelected) {
      setAutocompleteVisible(false);
    }
  }, [autocompleteSelected, inputSelected]);
  // handles setting search location coords
  useEffect(() => {
    const result = usCities.find((usCity) => usCity.text === city);
    if (result) {
      setSearchedLocation({ lat: result.latitude, lng: result.longitude });
    } else if (geoLocationStatus === "loaded") {
      if (
        location.lat !== searchedLocation.lat &&
        location.lng !== searchedLocation.lng
      ) {
        setSearchedLocation(location);
      }
    }
  }, [city, geoLocationStatus, location]);
  console.log(weatherDaily);
  console.log("_____");
  return (
    <Container>
      <CitySearchContainer>
        <MagnifyingGlassImage src={magnifyingGlass} alt="Magnifying glass" />
        <CitySearchInput
          value={city}
          onFocus={(e) => {
            console.log("input selected");
            setAutocompleteVisible(true);
          }}
          onBlur={(e) => {
            console.log("blur");
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
        {autocompleteVisible && (
          <AutoComplete
            onClick={(e) => {
              console.log("autocomplete selected");
            }}
            options={usCityName}
            filter={city}
            optionsDisplayLength={8}
            optionSelectFunction={(x: string) => {
              console.log("option selected");
              setCity(x);
              setAutocompleteSelected(true);
            }}
          />
        )}
      </CitySearchContainer>
      {status === "searching" && <Loading />}
      {status === "failed" && <Failed />}
      {status === "loaded" && dateDisplayed && (
        <>
          <WeatherCard
            dayOfTheWeek={weekday[date.getDay()]}
            todaysDate={`${month[date.getMonth()]} ${date.getDate()}`}
            temperature={dateDisplayed.temperature}
            iconSrc={dateDisplayed.icon}
            weatherDescription={dateDisplayed.shortForecast}
          />
          <ForecastHourly forecastHourlyArray={weatherHourly} />
        </>
      )}
    </Container>
  );
};

export default CitySearch;
