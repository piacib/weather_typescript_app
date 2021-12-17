import { useState, useEffect } from "react";
type Coordinates = { lat: number, lng: number }
type Location = {
    loaded: boolean;
    coordinates: Coordinates;
}
type Error = null | {
    code: number,
    message: string,
}
type LocationCoords = { 
    coords : {
        latitude: number,
        longitude: number
    }
}
const useGeoLocation = () => {
    const [location, setLocation] = useState<Location>({
        loaded: false,
        coordinates: { lat: 0, lng: 0 },
    });
    const [error, setError] = useState<Error>(null)
    const onSuccess = (location: LocationCoords) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    const onError = (error: Error) => {
        if (!error) {
            return
        }
        
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

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return {location, error};
};

export default useGeoLocation;