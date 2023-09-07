
import React from 'react';
//chracter.image will math the controller image url
import { Link } from "react-router-dom";

import './SearchResults.css'



const SearchResults = ({ results }) => {
  return (
    <div>
      
      <ul>
        {results.map((character) => (
          <li key={character._id}>
            <Link to={`/character/${character.id}`}>{character.name}
            {character.image && ( <img className="characterImage" src={character.image} alt={character.name} />)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
