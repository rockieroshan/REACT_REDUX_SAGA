import React from 'react';
import Days from '../Days/Days';
import Icon from '../Icon/Icon';
import Temp from '../Temp/Temp';
import { IWeatherBody } from './WeatherBodyTypes';
import './WeatherBody.scss';

const WeatherBody: React.SFC<IWeatherBody> = ({ day, temp, icon }) => {
  return (
    <div className="WeatherBody">
      <Days day={day} />
      <Icon icon={icon} />
      <Temp temp={temp} />
    </div>
  );
};

export default WeatherBody;
