import { Reducer } from 'redux';
import { WeatherActionTypes } from '../ActionTypes/ActionTypes';
import { WeatherState } from '../Types';

export const initialState: WeatherState = {
  data: undefined,
  error: undefined,
  loading: false,
};

const reducer: Reducer<WeatherState> = (state = initialState, action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case WeatherActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case WeatherActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as weatherReducer };
