import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const localHost = 'http://localhost:4000/';

const Search = () => {
  const [searchChar, setSearchChar] = useState('');
  const [searchType, setSearchType] = useState('character'); 
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchChar(e.target.value);
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      let apiUrl = `${localHost}api/search`;
      if (searchType === 'Comic') {
        apiUrl = `${localHost}api/search/comics`;
      }
      const response = await fetch(`${apiUrl}?name=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="Search">
      <h1>Marvel Search</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchChar); }}>
        <select value={searchType} onChange={handleSelectChange}>
          <option value="character">Character</option>
          <option value="comic">Comic</option>
        </select>
        <input
          className='searchBar'
          type="text"
          placeholder={`Search by ${searchType === 'character' ? 'name' : 'title'}...`}
          value={searchChar}
          onChange={handleInputChange}
        />
        <button className="searchButton" type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              {searchType === 'character' ? (
                <Link to={`/character/${result.id}`}>
                  {result.name}
                  {result.image && (
                    <img className="resultImage" src={result.image} alt={result.name} />
                  )}
                </Link>
              ) : (
                <Link to={`/comic/${result.id}`}>
                  {result.title}
                  {result.thumbnail && (
                    <img className="resultImage" src={result.thumbnail} alt={result.title} />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
