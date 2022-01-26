import React from "react";
import {
  WeatherCardContainer,
  Date,
  WeekDate,
  Temperature,
  DateContainer,
  WhiteLine,
  WeatherDescription,
  WeatherIcon,
  DegreeSymbol,
} from "./WeatherCard.style";

interface WeatherDisplayProps {
  dayOfTheWeek: string;
  todaysDate: string;
  temperature: number;
  weatherDescription: string;
  iconSrc: string;
}

const dayOfTheWeekConverter = (dayOfTheWeek: string) => {
  const firstWord = dayOfTheWeek.toLowerCase().split(" ")[0];
  if (firstWord === "this") {
    return "Today";
  }
  return firstWord[0].toUpperCase() + firstWord.substring(1);
};
const WeatherCard: React.FC<WeatherDisplayProps> = ({
  dayOfTheWeek,
  todaysDate,
  temperature,
  weatherDescription,
  iconSrc,
}) => {
  return (
    <WeatherCardContainer>
      <WeatherIcon src={iconSrc} alt={"weather"} />
      <DateContainer>
        <Date>{dayOfTheWeekConverter(dayOfTheWeek)}</Date>
        <WhiteLine />
        <WeekDate>{todaysDate}</WeekDate>
      </DateContainer>
      <Temperature>
        {temperature}
        <DegreeSymbol>&#176;</DegreeSymbol>
      </Temperature>
      <WeatherDescription>{weatherDescription}</WeatherDescription>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
