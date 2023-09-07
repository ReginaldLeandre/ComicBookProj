import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchChar, setSearchChar] = useState('');

  const handleInputChange = (e) => {
    setSearchChar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchChar);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchChar}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;