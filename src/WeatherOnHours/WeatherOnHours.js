import React from 'react';
import { Img, UL, Time, Type, UlItem, Name } from "./styled";
import { weatherTranslate } from "../utils";

const WeatherOnHours = ({ weather }) => (
  <div>
    <Name>Почасовой прогноз</Name>
    <UL>
      {weather && weather.map(el => (
        <UlItem key={el.hour}>
          <div>
            <Time>{el.hour + ':00'}</Time>
            <Type>{weatherTranslate[el.condition]}</Type>
          </div>
          <Img src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${el?.icon}.svg`} />
        </UlItem>
      ))}
    </UL>
  </div>
);

export default WeatherOnHours
