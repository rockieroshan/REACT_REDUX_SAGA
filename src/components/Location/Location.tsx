import React from 'react';
import LocationImg from '../../assets/location.svg';
import Icon from '../Icon/Icon';
import './Location.scss';
import { ILocation } from './LocationTypes';

const Location: React.SFC<ILocation> = ({ icon, city, temp, description }) => {
  return (
    <div className="Location">
      <div className="locationImgDegree">
        <div className="locationGrp">
          <img className="location-img" src={LocationImg} alt={LocationImg} />
          <div className="cityName">{city}</div>
        </div>
        <div className="degree">{temp}</div>
      </div>
      <div className="cloud">
        <Icon icon={icon} />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Location;
