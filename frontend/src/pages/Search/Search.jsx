import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const localHost = 'http://localhost:4000/';

const Search = () => {
  const [searchChar, setSearchChar] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchChar(e.target.value);
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`${localHost}api/search?name=${query}`);
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
    <div className="Search">
      <h1>Marvel Character Search</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchChar); }}>
        <input
          className='searchBar'
          type="text"
          placeholder="Search by name..."
          value={searchChar}
          onChange={handleInputChange}
        />
        <button className="searchButton" type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((character) => (
            <li key={character._id}>
              <Link to={`/character/${character.id}`}>
                {character.name}
                {character.image && (
                  <img className="characterImage" src={character.image} alt={character.name} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;