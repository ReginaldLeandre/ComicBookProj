import * as characterAPI from './character-api'




export async function getCharacters(){
    try {
        const data = await characterAPI.index()
        
        return data
    }catch(err){
        return err
    }
}



export async function showCharacter(id){
    try{
       const data = await characterAPI.showChar(id)
       return data
    }catch(err){
        return err
    }
}


export async function showComicBook(id){
    try{
       const data = await characterAPI.showComic(id)
       console.log(data)
       return data
    }catch(err){
        return err
    }
}



export async function showComic(query){
    try{
       const data = await characterAPI.search(query)
       return data
    }catch(err){
        return err
    }
}