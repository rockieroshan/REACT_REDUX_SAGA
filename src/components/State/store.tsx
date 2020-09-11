import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { weatherReducer } from './WeatherForecast/Reducer/Reducer';
import watchWeatherSaga from './Sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watchWeatherSaga()]);
}

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
