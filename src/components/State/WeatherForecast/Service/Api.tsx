import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherByCityName = (city: string) =>
  axios({
    method: 'get',
    baseURL: API_URL,
    url: 'forecast',
    params: {
      APPID: API_KEY,
      q: city,
      units: 'metric',
      cnt: '5',
    },
  })
    .then(({ data }) => data)
    .then((resp) => resp);

export default {
  getWeatherByCityName,
};
