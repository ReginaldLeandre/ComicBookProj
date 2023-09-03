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


// console.log(md5Hash)

const getMarvelCharacters = async (req,res) => {
    try{
        const response = await axios.get(`${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
                    params: {
                      limit: 10
                    }});

        // console.log(response);               
        // console.log(md5Hash)  
        const characters = response.data.data.results;
        
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
    const name = req.body;
    try{
        const response = await axios.get(`${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
                    params: {
                      limit: 10,
                      nameStartsWith: name
                    }});

        // console.log(response);               
        // console.log(md5Hash)  
        const character = response.data.data.results;
        
        res.json(character);
        
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            error: `Cannot Get Characters That Start With "${name}"` 
        });
    }
};


const showCharacter = async (req,res) => {

    
    try{
        const characterResponse = await axios.get(`${BASE_URL}/characters/{characterId}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {});
        

        
        console.log(characterResponse)                       
        const characterData = characterResponse.data.data.results;
        
        //retrieving character values
        const characterName = characterData.name;
        const characterDescription = characterData.description; 
        const comicsURI = characterData.comics.collectionURI            

        const comicsResponse = await axios.get(`${comicsURI}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${md5Hash}`, {
            params: {
              limit: 10
            },
          });



          const comicsData = comicsResponse.data.data.results;

          const characterComics = comicsData.map(comic => comic.title);


          const characterInfo = {
            name: characterName,
            description: characterDescription,
            comics: characterComics,
          };

        res.json(characterInfo);
        
    }
    catch(error){
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






  