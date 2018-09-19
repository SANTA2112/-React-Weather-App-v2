import React from 'react';
import {
  NotationBlock, NotationText, Wrapper, TextWrapper, InfoWrap,
  BoldSpan, Date, DayTemp, NightTemp, SmallSpan, UL, Img
} from "./styled";
import { convertDate, weatherTranslate, windDir } from "../utils";

const WeatherOnWeek = ({ weather }) => (
  <Wrapper>
    <NotationBlock>
      <TextWrapper>
        <NotationText>Днем</NotationText>
        <NotationText>Ночью</NotationText>
      </TextWrapper>
      <TextWrapper>
        <NotationText>Ветер</NotationText>
        <NotationText>Давление</NotationText>
      </TextWrapper>
    </NotationBlock>
    <InfoWrap>
      {weather && weather.map(el => (
        <UL key={el.date_ts}>
        <Date>{convertDate(el.date)}</Date>
        <Img src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${el.parts.day.icon}.svg`} alt=""/>
        <DayTemp>{el.parts.day.temp_min} / {el.parts.day.temp_max}</DayTemp>
        <NightTemp>{el.parts.night.temp_avg}</NightTemp>
        <li><SmallSpan>{weatherTranslate[el.parts.day.condition]}</SmallSpan></li>
        <li><BoldSpan>{windDir[el.parts.day.wind_dir]}</BoldSpan>: <SmallSpan>{el.parts.day.wind_speed} м/с</SmallSpan></li>
        <li>{el.parts.day.pressure_mm} <SmallSpan>мм.рт.ст</SmallSpan></li>
      </UL>
      ))}
    </InfoWrap>
  </Wrapper>
)


export default WeatherOnWeek
