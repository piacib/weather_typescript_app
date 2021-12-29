import React from "react";
import { AppContainer } from "./App.styles";
import CitySearch from "./components/CitySearch/CitySearch";
import useGeoLocation from "./hooks/useGeolocation";
import { useWeatherFetch } from "./hooks/useWeatherFetch";
function App() {
  const { location } = useGeoLocation();
  const { weatherDaily, status, weatherHourly } = useWeatherFetch(
    location.coordinates
  );
  return (
    <AppContainer>
      <CitySearch
        weatherDaily={weatherDaily}
        weatherHourly={weatherHourly}
        coordinates={location.coordinates}
      />
    </AppContainer>
  );
}

export default App;
