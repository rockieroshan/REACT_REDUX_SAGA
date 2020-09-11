import { useSelector } from 'react-redux';
import { WeatherState } from '../components/State/WeatherForecast/Types';

export const useSelect = () => {
  const { weather, loading, error } = useSelector(
    ({ weather }: { weather: WeatherState }) => ({
      weather: weather.data,
      loading: weather.loading,
      error: weather.error,
    })
  );
  return { weather, loading, error };
};
