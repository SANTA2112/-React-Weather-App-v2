import React from 'react';
import { Wrapper, SmallWrap } from "./styled";
import Loader from '../Loader';
import CurrentWeather from '../CurrentWeather';
import WeatherOnWeek from '../WeatherOnWeek';
import WeatherOnHours from '../WeatherOnHours';
import SearchBar from '../SearchBar';

export default ({ doRequest, weather, bgimg, isLoading }) => {
  //console.log(weather);
  if (isLoading) return <Loader />
  return (
    <div>
      <Wrapper bg={bgimg}>
        <SmallWrap>
          <div>
            <CurrentWeather weather={weather}/>
            <WeatherOnWeek weather={weather.forecasts}/>
          </div>
          <WeatherOnHours weather={weather.forecasts && weather.forecasts}/>
        </SmallWrap>
        <SearchBar doRequest={doRequest}/>
        { weather.error && 'Ошибка, повторите запрос' }
      </Wrapper>
    </div>
  )
};
