import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import "./CharacterDetails.css"
import { showCharacter } from '../../utilities/character-service'

function CharacterDetails({ character }) {
  const [characterData, setCharacterData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleRequest() {
    const characterResponse = await showCharacter(id);
    console.log(characterResponse)
    if (characterResponse?.id) {
    
      setCharacterData(characterResponse);
 
    } else {
      navigate('/')
    }
  }
  
  useEffect(() => {
    
    handleRequest()
  }); 

  return (
    <div>
      <img className='characterImage' src={characterData?.image} alt={characterData?.name} />
      <h1 className='characterName'>{characterData?.name}</h1>
      <p className='characterDescription'>{characterData?.description}</p>
      
      <h2>Featured Comics: </h2>
      <ul>
        {characterData?.comics.map((comic, index) => (
          <li className='characterComicListItem' key={comic.id}>
            <Link to={`/comics/${comic.id}`}>
            <h3 className='characterComicListTitle'>{comic.title}</h3>
            <img className='characterComicListImage' src={comic.image} alt={comic.title} />
            <p>{comic.price}</p>
            </Link>
          </li>
        ))}
            </ul>
  </div>
);
}
    


export default CharacterDetails;

