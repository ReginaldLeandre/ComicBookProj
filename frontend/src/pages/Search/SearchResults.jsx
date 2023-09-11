
import React from 'react';
//chracter.image will math the controller image url

import './SearchResults.css'



const SearchResults = ({ results }) => {
  return (
    <div>
      
      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            {character.image && ( <img className="characterImage" src={character.image} alt={character.name} />)}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
