const BASE_URL = process.env.REACT_APP_BASE_URL;

//    const BASE_URL = 'http://localhost:4000/'

export async function index() {
    const res = await fetch(`${BASE_URL}api/characters`, {
        method: "GET"
  })


  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}

export async function showChar(id) {
    const res = await fetch(`${BASE_URL}api/${id}`, {
        method: "GET"
  })


  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}


export async function showComic(id) {
    const res = await fetch(`${BASE_URL}api/comics/${id}`, {
        method: "GET"
  })

  console.log(res)
  if(res.ok){
    console.log(res.json)
    return res.json()

  }
  else {
    return new Error("Invalid Request")
  }
}


export async function search(query) {
    const res = await fetch(`${BASE_URL}api/search?name=${query}`, {
        method: "GET"
  })


  if(res.ok){
    return res.json()
  }
  else {
    return new Error("Invalid Request")
  }
}
