import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useParams, useNavigate, Link } from "react-router-dom";
import './ComicDetails.css'
import { showComicBook } from '../../utilities/character-service';


function ComicDetails({ comic }) {
  const [comicData, setComicData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();



  async function handleRequest() {
    const comicResponse = await showComicBook(id);
    console.log(comicResponse)
    if (comicResponse?.id) {
    
      setComicData(comicResponse);
 
    } else {
      navigate('/')
    }
  }
  
  useEffect(() => {
    
    handleRequest()
  }); 

  return (
  <div>
    <div className="comicContainer">
        <img className="ComicImage" src={comicData?.image} alt={comicData?.title} />
      <div className="comicInfo">
        <h1 className='ComicTitle'>{comicData?.title}</h1>
        <h2 className='ComicPrice'>{comicData?.price}</h2>
      </div>
    </div>
      <p className='ComicDescription'>{comicData?.description}</p>
      
      
      <h2>Featured Characters: </h2>
      <ul>
        {comicData?.featuredCharacters.map((character, index) => (
          <li className='FeaturedCharacterListItem' key={character.id}>
            <Link to={`/character/${character.id}`}>
            <h3 className='FeaturedCharacterName'>{character.name}</h3>
            <img className='FeaturedCharacterImage' src={character.image} alt={character.name} />
            </Link>
          </li>
        ))}
            </ul>
  </div>
);
}
    


export default ComicDetails;

