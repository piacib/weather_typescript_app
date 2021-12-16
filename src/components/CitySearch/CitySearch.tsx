import React from 'react'
import useGeoLocation from '../../hooks/useGeolocation'
import {
    CitySearchContainer,
    CitySearchInput
} from './CitySearch.style'
import magnifyingGlass from './magnifying-glass.svg'
const CitySearch = () => {
    const {location, } = useGeoLocation()
    const {lat, lng} = location.coordinates
    
    const defaultPlaceHolder = 'Search your city';
    const locationFoundPlaceHolder = 'Press search to use your location';

    return (
        <CitySearchContainer>
            <img src={magnifyingGlass} alt='Magnifying glass' />
            <CitySearchInput placeholder={(!lat && !lng) ? defaultPlaceHolder: locationFoundPlaceHolder} type='text'/>
        </CitySearchContainer>
    )
}

export default CitySearch
