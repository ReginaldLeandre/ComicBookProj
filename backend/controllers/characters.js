const axios = require('axios');
const crypto = require('crypto');



/***************************************************************************************************
 *                                         Global Variables for API Access
 *                                                 
 ***************************************************************************************************/
const ts = 1;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BASE_URL = process.env.BASE_URL;



const concatenatedString = ts + PRIVATE_KEY + PUBLIC_KEY;


const md5Hash = crypto.createHash('md5').update(concatenatedString).digest('hex');

/**************************************************************************************************/

/***************************************************************************************************
 *                                             shuffling the results
 * 
 * *************************************************************************************************/

// function randomizing(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//     }
// }

// console.log(md5Hash)



const getMarvelCharacters = async (req,res) => {
    try{
        const response = await axios.get(`${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
                    params: {
                      limit: 20
                    }});

                    const characters = response.data.data.results.map(character => {
                        const characterId = character.id;
                        const firstImage = character.thumbnail && character.thumbnail.path
                          ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                          : null;
                          return {
                            name: character.name,
                            id: characterId, //this id will help with the url 
                            image: firstImage 
                          };
                        });
                               
        
                    

        res.json(characters);
        
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            error: "Cannot Get Characters"
        });
    }
};



const searchCharacter = async (req, res) => {
    const { name } = req.query;
    try{
        const response = await axios.get(`${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
                    params: {
                      limit: 20,
                      nameStartsWith: name
                    }});

    

        const characters = response.data.data.results.map(character => {
        console.log(character.id)               
            const firstImage = character.thumbnail && character.thumbnail.path
              ? `${character.thumbnail.path}.${character.thumbnail.extension}`
              : null;
              return {
                name: character.name,
                image: firstImage 
              };
            });
        
        res.json(characters);
        
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            error: `Cannot Get Characters That Start With "${name}"` 
        });
    }
};


const showCharacter = async (req, res) => {
    try {
      const characterId = req.params.id;
      
      
      const characterResponse = await axios.get(`${BASE_URL}/characters/${characterId}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`);
      const characterData = characterResponse.data.data.results[0];
      
      const characterName = characterData.name;
      const characterDescription = characterData.description;
      const charId = characterData.id
      
      const characterImageURL = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
  
      
      const comicsURI = characterData.comics.collectionURI;
      const comicsResponse = await axios.get(`${comicsURI}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
        params: {
          limit: 10
        }
      });
  
      const comicsData = comicsResponse.data.data.results;
      const characterComics = comicsData.map(comic => ({
        title: comic.title,
        image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      }));
  
      const characterInfo = {
        name: characterName,
        id: charId,
        description: characterDescription,
        image: characterImageURL, 
        comics: characterComics,
      };
  
      res.json(characterInfo);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Cannot Get Character Details"
      });
    }
  };
  

module.exports = {
    list: getMarvelCharacters,
    search: searchCharacter,
    show: showCharacter
};