import { put, call } from 'redux-saga/effects';
import { getWeatherByCityName } from '../WeatherForecast/Service/Api';

import { fetchWeatherSaga } from './Sagas';

describe('Weather Saga', () => {
  it('should get weather for a given city and dispatch success', () => {
    const response = {
      city: 'Madrid',
    };
    const generator = fetchWeatherSaga({
      type: '@@weather/FETCH_REQUEST',
      payload: 'Madrid',
    });

    expect(generator.next().value).toEqual(
      call(getWeatherByCityName, 'Madrid')
    );
    expect(generator.next(response).value).toEqual(
      put({
        type: '@@weather/FETCH_SUCCESS',
        payload: response,
      })
    );
    expect(generator.next().done).toBe(true);
  });

  it('should dispatch failure if there is any error', () => {
    const error = {
      cod: 404,
      message: 'city not found',
    };
    const generator = fetchWeatherSaga({
      type: '@@weather/FETCH_REQUEST',
      payload: 'Unknown city',
    });

    expect(generator.next().value).toEqual(
      call(getWeatherByCityName, 'Unknown city')
    );
    expect(
      generator.throw({
        response: {
          data: error,
        },
      }).value
    ).toEqual(
      put({
        type: '@@weather/FETCH_ERROR',
        payload: error.message,
      })
    );
    expect(generator.next().done).toBe(true);
  });
});
