import React from 'react';
import { Name, Wrapper, Temp, TempWrap, Text } from "./styled";
import { weatherTranslate } from "../utils";

export default ({ weather }) => {
  if(weather.error) return null;
  return (
    <div>
      <Wrapper>
        <Name>{weather?.info?.tzinfo?.name}</Name>
        <TempWrap>
          <Temp>{weather?.fact?.temp}</Temp>
          <img src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${weather?.fact?.icon}.svg`} alt=""/>
        </TempWrap>
        <Text>По ощущениям: {weather?.fact?.feels_like}</Text>
        <Text>{weatherTranslate[weather?.fact?.condition]}</Text>
        <Text>Давление: {weather?.fact?.pressure_mm} мм.рт.ст</Text>
        <Text>Влажность: {weather?.fact?.humidity}</Text>
        <Text>Ветер: {weather?.fact?.wind_speed} м/с</Text>
      </Wrapper>
    </div>
  )
}
