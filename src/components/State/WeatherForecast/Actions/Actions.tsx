import { action } from 'typesafe-actions';

import { WeatherActionTypes } from '../ActionTypes/ActionTypes';
import { Weather } from '../Types';

export const fetchWeatherRequest = (payload: string) =>
  action(WeatherActionTypes.FETCH_REQUEST, payload);

export const fetchWeatherSuccess = (data: Weather) =>
  action(WeatherActionTypes.FETCH_SUCCESS, data);

export const fetchWeatherError = (message: string) =>
  action(WeatherActionTypes.FETCH_ERROR, message);
