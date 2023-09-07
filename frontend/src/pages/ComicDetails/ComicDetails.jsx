import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
      <h1>{comicData?.title}</h1>
      <p>{comicData?.description}</p>
      <img src={comicData?.image} alt={comicData?.title} />
      <h2>Featured Characters: </h2>
      <ul>
        {comicData?.featuredCharacters.map((character, index) => (
          <li key={index}>
            <Link to={`/character/${character.id}`}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            </Link>
          </li>
        ))}
            </ul>
  </div>
);
}
    


export default ComicDetails;

