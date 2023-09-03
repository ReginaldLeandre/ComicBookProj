import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


const localHost = 'http://localhost:4000/'


function SearchPull() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`${localHost}/api/search?name=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching characters:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SearchPull">
      <h1>Marvel Character Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
}

export default SearchPull;