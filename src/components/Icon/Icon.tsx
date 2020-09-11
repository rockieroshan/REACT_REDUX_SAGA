import React from 'react';
import Cloudy from '../../assets/cloudy.svg';
import Rain from '../../assets/rain.svg';
import Snowing from '../../assets/snowing.svg';
import Sun from '../../assets/sun.svg';
import Drizzle from '../../assets/drizzle.svg';
import Thunderstorm from '../../assets/thunderstorm.svg';

import { Iicon } from './IconTypes';
import './Icon.scss';

const Icon: React.SFC<Iicon> = ({ icon }) => {
  switch (icon) {
    case 'Clouds':
      return (
        <img data-test="icon" className="icon" src={Cloudy} alt={Cloudy} />
      );
    case 'Rain':
      return <img data-test="icon" className="icon" src={Rain} alt={Rain} />;
    case 'Snow':
      return (
        <img data-test="icon" className="icon" src={Snowing} alt={Snowing} />
      );
    case 'Thunderstorm':
      return (
        <img
          data-test="icon"
          className="icon"
          src={Thunderstorm}
          alt={Thunderstorm}
        />
      );
    case 'Drizzle':
      return (
        <img data-test="icon" className="icon" src={Drizzle} alt={Drizzle} />
      );
    case 'Clear':
      return <img data-test="icon" className="icon" src={Sun} alt={Sun} />;
    default:
      return (
        <img data-test="icon" className="icon" src={Cloudy} alt={Cloudy} />
      );
  }
};

export default Icon;
