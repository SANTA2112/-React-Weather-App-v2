const TOKEN = '978457a4-f5ee-4173-8f47-3096615d5e4c';
const API_URL = 'https://api.weather.yandex.ru/v1/forecast';
const GEO_TOKEN = 'f50a66ab22c74c7c95b5a6878125571c';
const GEO_API_URL = 'https://api.opencagedata.com/geocode/v1/geojson?q=';
const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';

const getJSON = (...args) => fetch(...args).then(r => r.json());

export const getUserCoords = () => new Promise(r => window.navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => r({ latitude, longitude})))

const fetchCoordinates = city => getJSON(`${CORS_PROXY}${GEO_API_URL}${city}&key=${GEO_TOKEN}`)
  .then((resp) => {
    if (!resp) throw new Error();
    return resp.features[0].geometry.coordinates;
  })
  .catch(e => ({ error: 'Bad response' }));

export const fetchWeatherByCoord = ({lat, lng}) => getJSON(`${CORS_PROXY}${API_URL}?lat=${lat}&lon=${lng}&limit=5&hours=true&extra=false`, { headers: { 'X-Yandex-API-Key': TOKEN } });

export const fetchWeather = (city) => fetchCoordinates(city).then(resp => {
  if (resp.error) throw new Error();
  const [ lng, lat ] = resp;
  return fetchWeatherByCoord(({ lat, lng }));
});
