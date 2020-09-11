import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherRequest } from '../components/State/WeatherForecast/Actions/Actions';

export const useDispatches = () => {
  const [searchCityVal, setSearchCityVal] = useState<string>('');
  const weatherDispatch = useDispatch();

  useEffect(() => {
    if (searchCityVal !== '') {
      weatherDispatch(fetchWeatherRequest(searchCityVal));
    }
  }, [weatherDispatch, searchCityVal]);

  return [setSearchCityVal];
};
