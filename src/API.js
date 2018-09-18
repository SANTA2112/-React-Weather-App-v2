const TOKEN = '978457a4-f5ee-4173-8f47-3096615d5e4c';
const API_URL = 'https://api.weather.yandex.ru/v1/forecast';
const GEO_API_URL = 'https://maps.google.com/maps/api/geocode/json?address=';
const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';

const getJSON = (...args) => fetch(...args).then(r => r.json());

export const getCoordinates = city => getJSON(`${CORS_PROXY}${GEO_API_URL}${city}`)
  .then((resp) => {
    const { results } = resp;
    if (!results || results.length === 0) throw new Error();
    return results[0].geometry.location;
  })
  .catch(e => ({ error: 'Bad response' }))

export const getWeather = (lat, lng) => getJSON(`${CORS_PROXY}${API_URL}?lat=${lat}&lon=${lng}&limit=5&hours=false&extra=false`, { headers: { 'X-Yandex-API-Key': TOKEN } });
