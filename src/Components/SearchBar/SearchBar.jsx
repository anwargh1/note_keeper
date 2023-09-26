import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import './searchBar.css';
function SearchBar({ onSearch }) {
  const [searchTask, setSearchTask] = useState('');

  function handelOnChange(e) {
    const value = e.target.value.toLowerCase();
    setSearchTask(value);
    onSearch(value);
  }
  return (
    <div className="search-bar" id="search">
      <span className="search-icon">
        <TfiSearch />
      </span> {'  '}
      <div >
      <input
        htmlFor="search"
        type="search"
        className="search-input"
        value={searchTask}
        onChange={handelOnChange}
      />
      <label className="search-bar-box">Search</label>
      </div>
    </div>
  );
}

export default SearchBar;
