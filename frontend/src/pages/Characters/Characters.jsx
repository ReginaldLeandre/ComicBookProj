import { useEffect, useState } from "react";
import "./Characters.css"
import { Link, useNavigate } from "react-router-dom";
import { getCharacters } from "../../utilities/character-service";




const Characters = () => {
    const [characters, setCharacters] = useState(null);
    const navigate = useNavigate()

    // if (response.ok) {
                
    //     const filteredCharacters = jsonResponse.filter(character => character.image);

    //     setCharacters(filteredCharacters);
    //   }
    async function handleRequest() {
        const characterResponse = await getCharacters()
    if (characterResponse.length) {
        setCharacters(characterResponse);
        
      } else {
        console.log(characterResponse);
        // context update for error handling might be called
      }
    }
  

    useEffect(() => {
        handleRequest()
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