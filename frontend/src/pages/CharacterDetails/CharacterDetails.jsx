import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function CharacterDetails({ character }) {
  const [characterData, setCharacterData] = useState(null);
  const { id } = useParams();


  
  useEffect(() => {
    const localHost = 'http://localhost:4000/';

    



    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`${localHost}api/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [id]); // Include 'id' as a dependency to re-fetch when 'id' changes

  return (
    <div>
      <h1>{characterData?.name}</h1>
      <p>{characterData?.description}</p>
      <img src={characterData?.image} alt={characterData?.name} />
      <h2>Featured Comics: </h2>
      <ul>
        {characterData?.comics.map((comic, index) => (
          <li key={index}>
            <Link to={`/comics/${comic.id}`}>
            <h3>{comic.title}</h3>
            <img src={comic.image} alt={comic.title} />
            </Link>
          </li>
        ))}
            </ul>
  </div>
);
}
    


export default CharacterDetails;

