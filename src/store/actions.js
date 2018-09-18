import { GET_WEATHER, LOADED, LOADING } from './constants';
import { fetchWeather, fetchWeatherByCoord } from '../API';

export const loading = () => ({ type: LOADING });
export const loaded = () => ({ type: LOADED });

export const getWeather = (data, counter = 0) => dispatch => {
  dispatch(loading());
  (typeof data === 'string' ? fetchWeather : fetchWeatherByCoord)(data)
    .then(payload => {
      dispatch({ type: GET_WEATHER, payload });
      dispatch(loaded());
    })
    .catch(e => {
      if (counter > 10) {
        dispatch({ type: GET_WEATHER, payload: { error: 'Bad response' } });
        dispatch(loaded());
      } else {
        getWeather(data, counter + 1)(dispatch);
      }
    })
};
