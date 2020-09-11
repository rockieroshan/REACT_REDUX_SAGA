import { put, call, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../WeatherForecast/ActionTypes/ActionTypes';
import {
  fetchWeatherSuccess,
  fetchWeatherError,
} from '../WeatherForecast/Actions/Actions';
import { getWeatherByCityName } from '../WeatherForecast/Service/Api';

export interface GetWeatherAction {
  type: typeof actionTypes.WeatherActionTypes.FETCH_REQUEST;
  payload: string;
}

export function* fetchWeatherSaga(action: GetWeatherAction) {
  try {
    const response = yield call(getWeatherByCityName, action.payload);
    yield put(fetchWeatherSuccess(response));
  } catch (error) {
    yield put(fetchWeatherError(error.response.data.message));
  }
}

export function* watchWeatherSaga() {
  yield takeEvery(
    actionTypes.WeatherActionTypes.FETCH_REQUEST,
    fetchWeatherSaga
  );
}

export default watchWeatherSaga;
