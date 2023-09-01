const axios = require('axios');
const crypto = require('crypto');



/***************************************************************************************************
 *                                         Boiler plate for accessing the api
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
                      limit: 10,
                      nameStartsWith: "spider"
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



module.exports = {
    show: getMarvelCharacters
};






  