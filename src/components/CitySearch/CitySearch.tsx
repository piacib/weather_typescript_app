import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import magnifyingGlass from "./magnifying-glass.svg";
import {
  Container,
  CitySearchContainer,
  CitySearchInput,
  MagnifyingGlassImage,
  WeatherDateToggle,
  DateToggleButton,
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
// json of all usCIties and lat and long
const usCities: CityEntry[] = require("./usCities.json");
// filtered name of cities
const usCityName = usCities.map((entry) => entry.text);

const defaultPlaceHolder = "Search your city";
const locationFoundPlaceHolder = "Press search to use your location";
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
  const [inputSelected, setInputSelected] = useState<boolean>(false);
  const { weatherDaily, status, weatherHourly } =
    useWeatherFetch(searchedLocation);

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
        setForecastHourlyStartEntry(startTime[0].number); //parseInt(startTime[0].startTime));
    }
  }, [dateDisplayed, weatherHourly]);
  // sets datedisplayed when weather daily is initially loaded
  useEffect(() => {
    if (weatherDaily) {
      setDateDisplayed(weatherDaily[0]);
    }
  }, [weatherDaily]);

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
    // will cause infinite loop if searchedLocation is added so I disabled the error
  }, [city, geoLocationStatus, location]);
  return (
    <Container>
      <CitySearchContainer>
        <MagnifyingGlassImage src={magnifyingGlass} alt="Magnifying glass" />
        <CitySearchInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={
            !location.lat && !location.lng
              ? defaultPlaceHolder
              : locationFoundPlaceHolder
          }
          type="text"
        ></CitySearchInput>

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
          }}
        />
      </CitySearchContainer>
      {status === "searching" && <Loading />}
      {status === "failed" && <Failed />}
      {status === "loaded" && dateDisplayed && (
        <>
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
