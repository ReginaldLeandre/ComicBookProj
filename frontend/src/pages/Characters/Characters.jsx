import { useEffect, useState } from "react";

// const localHost = 'http://localhost:4000/'

const Characters = () => {
    const [characters, setCharacters] = useState(null);


    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('api/characters');
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
                    <p key={character._id}>{character.name}</p>

                ))}

            </div>
        </div>
    )
}



export default Characters;