# Weather

## How I worked on this project

-

## How to navigate this project

- custom [image-sprite](public/icons/static/weather-sprite.svg) to save on HTTP requests sent
- [custom geolocation hook](src/hooks/useGeolocation.ts)
- [custom weather data hook](src/hooks/useWeatherFetch.ts) with error handling and multiple api calls that utilize each others information

## Why I built the project this way

- I chose to not use a state management library such as Redux on purpose
- I used Typescript for this project because of its increasing prevalence in the front end web community and the benefit of quickly finding errors in code when they are changed down the line

## If I had more time I would change this

- Add multi city search
- Add testing
- Implement map selection
