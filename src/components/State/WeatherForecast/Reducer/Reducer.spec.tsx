import { weatherReducer, initialState } from './Reducer';

describe('Weather reducer', () => {
  it('should handle @@weather/FETCH_REQUEST', () => {
    expect(
      weatherReducer(initialState, {
        type: '@@weather/FETCH_REQUEST',
        payload: 'Madrid',
      })
    ).toEqual({
      data: undefined,
      error: undefined,
      loading: true,
    });
  });

  it('should handle @@weather/FETCH_SUCCESS', () => {
    const payload = {
      city: 'Madrid',
      list: [],
    };
    expect(
      weatherReducer(
        { ...initialState, loading: true },
        { type: '@@weather/FETCH_SUCCESS', payload }
      )
    ).toEqual({
      data: payload,
      error: undefined,
      loading: false,
    });
  });

  it('should handle @@weather/FETCH_ERROR', () => {
    const payload = 'city not found';
    expect(
      weatherReducer(
        { ...initialState, loading: true },
        { type: '@@weather/FETCH_ERROR', payload }
      )
    ).toEqual({
      data: undefined,
      error: payload,
      loading: false,
    });
  });
});
