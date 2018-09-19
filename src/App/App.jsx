import React from 'react';
import { Wrapper, SmallWrap } from "./styled";
import Loader from '../Loader';
import CurrentWeather from '../CurrentWeather';
import WeatherOnWeek from '../WeatherOnWeek';
import WeatherOnHours from '../WeatherOnHours';

export default ({ doRequest, weather, input, inputHandler, bgimg, isLoading }) => {
  //console.log(weather);
  if (isLoading) return <Loader />
  console.log(weather)
  return (
    <div>
      <Wrapper bg={bgimg}>
        <SmallWrap>
          <div>
            <CurrentWeather weather={weather}/>
            <WeatherOnWeek weather={weather.forecasts}/>
          </div>
          <WeatherOnHours weather={weather.forecasts && weather.forecasts[0]?.hours}/>
        </SmallWrap>
        <input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
        <button onClick={doRequest}>Get Weather</button>
        { weather.error && 'Ошибка, повторите запрос' }
      </Wrapper>
    </div>
  )
};
