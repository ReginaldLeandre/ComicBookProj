import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ComicDetails.css'

function ComicDetails({ comic }) {
  const [comicData, setComicData] = useState(null);
  const { id } = useParams();
  

  
  useEffect(() => {
    
    const localHost = 'http://localhost:4000/';
    



    const fetchComicDetails = async () => {
      try {
        const response = await fetch(`${localHost}api/comics/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setComicData(data);
      } catch (error) {
        console.error('Error fetching comic details:', error);
      }
    };

    fetchComicDetails();
  }, [id]); // Include 'id' as a dependency to re-fetch when 'id' changes

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
          <li className='FeaturedCharacterListItem' key={index}>
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

