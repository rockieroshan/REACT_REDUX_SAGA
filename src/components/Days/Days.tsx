import React from 'react';
import { Iday } from './DaysTypes';
import './Days.scss';

const Days: React.SFC<Iday> = ({ day }) => {
  return (
    <div data-test="Days" className="Days">
      {day}
    </div>
  );
};

export default Days;
