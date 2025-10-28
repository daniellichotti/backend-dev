const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
var offset = 30

async function pokeApi() {
    const response = await fetch(`${API_URL}/?offset=${offset}&limit=10`)
    const data = await response.json()

    console.log(data.results)
}

pokeApi()