import React from 'react';
import './Loader.scss';
import Spinner from '../../assets/Spinner.gif';

const Loader: React.SFC = () => {
  return (
    <div className="Loader">
      <img src={Spinner} alt={Spinner} />
    </div>
  );
};

export default Loader;
