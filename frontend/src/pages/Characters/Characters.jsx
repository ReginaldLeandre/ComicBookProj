import { useEffect, useState } from "react";
import "./Characters.css"
import { Link } from "react-router-dom";

const localHost = 'http://localhost:4000/'

const Characters = () => {
    const [characters, setCharacters] = useState(null);


    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`${localHost}api/characters`);
            const jsonResponse = await response.json();


            if (response.ok) {
                
                const filteredCharacters = jsonResponse.filter(character => character.image);
        
                setCharacters(filteredCharacters);
              }
        }
        fetchCharacters()
    }, {})


    return(
        <div className="=Characters">

            <div className="charactersList">
                
                {characters && characters.map((character) => (
                    <div className="CharacterListings" key={character._id}> 
                    <Link className="CharacterLink" to={`/character/${character.id}`}>
                        <h3 className="CharacterName">{character.name}</h3>{character.image && (
                    <img className="characterImage" src={character.image} alt={character.name} />
                      )}
                      
                      </Link>
                      </div>

                ))}

            </div>
        </div>
    )
}



export default Characters;