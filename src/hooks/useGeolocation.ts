import { useState, useEffect } from "react";
type Coordinates = { lat: number; lng: number };
type Error = null | {
  code: number;
  message: string;
};
type LocationCoords = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
type statusType = "idle" | "searching" | "loaded" | "failed";
const idle = "idle";
const searching = "searching";
const loaded = "loaded";
const failed = "failed";

const useGeoLocation = () => {
  const [status, setStatus] = useState<statusType>(idle);
  const [location, setLocation] = useState<Coordinates>({
    lat: 0,
    lng: 0,
  });
  const [error, setError] = useState<Error>(null);
  const onSuccess = (location: LocationCoords) => {
    setStatus(loaded);
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const onError = (error: Error) => {
    if (!error) {
      return;
    }
    setStatus(failed);
    setError({
      code: error.code,
      message: error.message,
    });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    setStatus(searching);
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return { status, location, error };
};

export default useGeoLocation;
