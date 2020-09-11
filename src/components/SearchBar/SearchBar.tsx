import React, { useState } from 'react';
import Search from '../../assets/search.svg';
import './SearchBar.scss';
import { PropsSearchCity } from './SearchTypes';

const SearchBar = (props: PropsSearchCity) => {
  const [query, setquery] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query !== '') {
      props.searchCity(query);
    }
    setquery('');
  };
  return (
    <div className="SearchBar">
      <form onSubmit={onSubmit} className="formSearchCity">
        <img className="search-icon" src={Search} alt={Search} />
        <input
          type="text"
          name="city"
          className="search-bar-input"
          value={query}
          onChange={(e: React.FormEvent) =>
            setquery((e.target as HTMLInputElement).value)
          }
        />
        <button type="submit" className="btn" disabled={query === ''}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
