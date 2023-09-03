// SearchResults.js
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
