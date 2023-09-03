import { useEffect, useState } from "react";

const localHost = 'http://localhost:4000/'

const Characters = () => {
    const [characters, setCharacters] = useState(null);


    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`${localHost}api/characters`);
            const jsonResponse = await response.json();


            if(response.ok){

                setCharacters(jsonResponse)
            }
        }
        fetchCharacters()
    }, {})


    return(
        <div className="=Characters">

            <div className="charactersList">
                
                {characters && characters.map((character) => (
                    <div className="CharacterListings" key={character._id}><nav className="characterNav">{character.name}</nav></div>

                ))}

            </div>
        </div>
    )
}



export default Characters;