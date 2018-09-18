import { GET_WEATHER } from './constants';
import { fetchWeather, fetchWeatherByCoord } from '../API'

export const getWeather = (data) => dispatch => {
  (typeof data === 'string' ? fetchWeather : fetchWeatherByCoord)(data).then(payload => dispatch({ type: GET_WEATHER, payload }))
}
