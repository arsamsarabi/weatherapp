import axios from 'axios';
import { LOAD_WEATHER } from './types';

const fetchWeatherReport = city => (dispatch) => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5da49dcba2d6945da998e68f5157c552`)
    .then(res => dispatch({
      type: LOAD_WEATHER,
      payload: res.data,
    }))
    .catch(err => console.log(err));
};

export {
  fetchWeatherReport,
};
