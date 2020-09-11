import React from 'react';
import './Temp.scss';
import { Itemp } from './TempTypes';

const Temp: React.SFC<Itemp> = ({ temp }) => {
  return (
    <div className="TempContainer">
      <span data-test="temp" className="temp">
        {temp}&#176;
      </span>
    </div>
  );
};

export default Temp;
