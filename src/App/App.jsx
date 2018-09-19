import React from 'react';
import { Wrapper } from "./styled";
import Loader from '../Loader';
import CurrentWeather from '../CurrentWeather';
import WeatherOnWeek from '../WeatherOnWeek';


export default ({ doRequest, weather, input, inputHandler, bgimg, isLoading }) => {
  //console.log(weather);
  if (isLoading) return <Loader />
  return (
    <Wrapper bg={bgimg}>
      <CurrentWeather weather={weather}/>
      <WeatherOnWeek weather={weather.forecasts}/>
      <input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
      <button onClick={doRequest}>Get Weather</button>
      { weather.error && 'Ошибка, повторите запрос' }
    </Wrapper>
  )
};
