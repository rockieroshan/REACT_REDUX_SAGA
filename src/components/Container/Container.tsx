import React from 'react';
import WeatherBody from '../WeatherBody/WeatherBody';
import Location from '../Location/Location';
import SearchBar from '../SearchBar/SearchBar';
import { useSelect } from '../../hooks/UseSelect';
import LocationImg from '../../assets/location.svg';
import { useDispatches } from '../../hooks/UseDispatch';
import Loader from '../Loader/Loader';
import './Container.tsx';
import './Container.scss';

const Container: React.SFC = () => {
  const days: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const { weather, loading, error } = useSelect();
  const [setSearchCityVal] = useDispatches();

  const searchCity = (cityName: string): void => {
    setSearchCityVal(cityName.trim());
  };

  if (loading) return <Loader />;

  return (
    <>
      <SearchBar searchCity={searchCity} />
      {weather?.city ? (
        <>
          <Location
            city={weather.city.name}
            icon={weather.list[0].weather[0].main}
            temp={weather.list[0].main.temp.toFixed(1)}
            description={weather.list[0].weather[0].description}
          />
          <div className="weatherContainer">
            {days &&
              days.map((day, index) => {
                return (
                  <WeatherBody
                    key={index}
                    day={day}
                    icon={weather.list[index].weather[0].main}
                    temp={weather.list[index].main.temp}
                  />
                );
              })}
          </div>
        </>
      ) : (
        <div className="noInput">
          {error ? (
            <div className="locationError">{error}</div>
          ) : (
            <div className="noLocation">Please look for a location</div>
          )}
          <img className="location-img" src={LocationImg} alt={LocationImg} />
        </div>
      )}
    </>
  );
};

export default Container;
