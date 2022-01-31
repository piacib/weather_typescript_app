import React, { useEffect, useState } from "react";
import useGeoLocation from "../../hooks/useGeolocation";
import { ForecastEntry, useWeatherFetch } from "../../hooks/useWeatherFetch";
import {
  Container,
  CitySearchContainer,
  CitySearchInput,
  MagnifyingGlassImage,
  InputAutoContainer,
} from "./CitySearch.style";
import { WeatherDateToggle, DateToggleButton } from "./WeatherDateToggle.style";
import { AutoComplete } from "../Autocomplete/AutoComplete";
import WeatherCard from "../WeatherCard/WeatherCard";
import ForecastHourly from "../ForecastHourly/ForecastHourly";
import { Coordinates } from "./CitySearch.types";
import Loading from "./Loading";
import Failed from "./Failed";
import magnifyingGlass from "./magnifying-glass.svg";

type CityEntry = {
  key: number;
  value: string;
  text: string;
  longitude: number;
  latitude: number;
};
const usCities: CityEntry[] = require("./usCities.json");
const usCityName = usCities.map((entry) => entry.text);
const defaultPlaceHolder = "Search a city";
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
  const { location: geoLocation } = useGeoLocation();
  const [city, setCity] = useState<string>("");
  const [location, setLocation] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });
  const [autocompleteVisible, setAutocompleteVisible] =
    useState<boolean>(false);
  const [autocompleteSelected, setAutocompleteSelected] =
    useState<boolean>(false);
  const [inputSelected, setInputSelected] = useState<boolean>(false);
  const { weatherDaily, status, weatherHourly } = useWeatherFetch(location);
  const [dateDisplayed, setDateDisplayed] = useState<ForecastEntry | null>(
    null
  );
  const [forecastHourlyStartEntry, setForecastHourlyStartEntry] =
    useState<number>(0);
  // sets starting point in hourly array to match WeatherDateToggle
  useEffect(() => {
    if (dateDisplayed) {
      const startTime = weatherHourly.filter(
        (weather) => weather.startTime === dateDisplayed.startTime
      );
      console.log("startTime", startTime[0]);
      startTime.length === 1 &&
        setForecastHourlyStartEntry(startTime[0].number);
    }
  }, [dateDisplayed, weatherHourly]);
  // sets dateDisplayed when weather daily is initially loaded
  useEffect(() => {
    if (weatherDaily) {
      setDateDisplayed(weatherDaily[0]);
    }
  }, [weatherDaily]);
  // when geolocation loads sets searched location
  useEffect(() => {
    setLocation(geoLocation);
  }, [geoLocation]);

  // handles setting search location coords when new city is searched
  useEffect(() => {
    const result = usCities.find((usCity) => usCity.text === city);
    if (result) {
      setLocation({ lat: result.latitude, lng: result.longitude });
    }
  }, [city]);
  //
  useEffect(() => {}, [city]);
  // handles autocomplete visibility
  useEffect(() => {
    if (autocompleteSelected) {
      setAutocompleteVisible(false);
    } else if (inputSelected) {
      setAutocompleteVisible(true);
    }
    if (inputSelected) {
      setAutocompleteVisible(true);
    }
    if (!autocompleteSelected && !inputSelected) {
      setAutocompleteVisible(false);
    }
  }, [autocompleteSelected, inputSelected]);
  useEffect(() => {
    setAutocompleteVisible(false);
    setAutocompleteSelected(false);
    setInputSelected(false);
  }, [status]);
  const element = document.activeElement;
  console.log("status", status);
  console.log("____");
  return (
    <Container>
      <CitySearchContainer>
        <MagnifyingGlassImage src={magnifyingGlass} alt="Magnifying glass" />
        <InputAutoContainer
          onClick={() => {
            console.log("active InputAutoContainer");
          }}
          onBlur={() => {
            console.log("blur InputAutoContainer");
          }}
        >
          <CitySearchInput
            value={city}
            onFocus={(e) => {
              console.log("input selected");
              setAutocompleteVisible(true);
            }}
            onBlur={(e) => {
              // console.log("blur");
              // console.log(city);
              // console.log(element);
              // setInputSelected(false);
              // if (autocompleteSelected) {
              // setAutocompleteVisible(false);
              // }
              // console.log("InputSelected", inputSelected);
              // console.log("AutocompleteSelected", autocompleteSelected);
              // console.log("AutocompleteVisible", autocompleteVisible);
            }}
            onChange={(e) => setCity(e.target.value)}
            placeholder={defaultPlaceHolder}
            type="text"
          />
          {autocompleteVisible && (
            <AutoComplete
              options={usCityName}
              filter={city}
              optionsDisplayLength={8}
              optionSelectFunction={(x: string) => {
                setCity(x);

                // setAutocompleteSelected(true);
                console.log("option selected");
                // console.log("InputSelected", inputSelected);
                // console.log("AutocompleteSelected", autocompleteSelected);
                // console.log("AutocompleteVisible", autocompleteVisible);
              }}
            />
          )}
        </InputAutoContainer>
        <WeatherDateToggle
          onChange={(e) => {
            setDateDisplayed(weatherDaily[parseInt(e.target.value)]);
          }}
        >
          {/* last entry has no data in weatherHourly */}
          {weatherDaily.slice(0, -1).map((date, idx) => (
            <DateToggleButton value={idx} key={date.name}>
              {date.name}
            </DateToggleButton>
          ))}
        </WeatherDateToggle>
      </CitySearchContainer>
      {status === "searching" && <Loading />}
      {status === "failed" && <Failed />}
      {status === "loaded" && dateDisplayed && (
        <>
          <WeatherCard
            dayOfTheWeek={dateDisplayed.name}
            todaysDate={`${
              month[new Date(dateDisplayed.startTime).getMonth()]
            } ${new Date(dateDisplayed.startTime).getDate()}`}
            temperature={dateDisplayed.temperature}
            iconSrc={dateDisplayed.icon}
            weatherDescription={dateDisplayed.shortForecast}
          />
          <ForecastHourly
            startEntry={forecastHourlyStartEntry}
            forecastHourlyArray={weatherHourly}
          />
        </>
      )}
    </Container>
  );
};

export default CitySearch;
