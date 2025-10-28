const API_URL = 'http://localhost:3000/movies'
const API_DIRECTOR_URL = 'http://localhost:3000/directors'

//GET
async function getMovies() {
    //fetch('http://localhost:3000/movies')
    //    .then(response => response.json())
    //    .then(data => console.log(data)).catch(error => console.log(error))

    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (e) {
        console.error('Erro: ', e)
    }
}

async function getMovieByName(title) {
    movieList = await getMovies()

    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].title === title) {
            console.log(movieList[i])
        }

    }
}

async function getDirectorById(id) {
    const response = await fetch(`${API_DIRECTOR_URL}/${id}`)
    const data = await response.json()
    return data
}

async function getMovieById(id) {
    const response = await fetch(`${API_URL}/${id}`)
    const data = await response.json()

    console.log(`Título: ${data.title}`)
    console.log(`Rating: ${data.rating}`)
    const duration = data.duration / 60
    console.log(`Duration: ${parseInt(duration)}h ${data.duration - parseInt(duration) * 60}min`)
    const director = await getDirectorById(data.directorId)
    console.log('Diretor(es):')
    director.name.split(', ').forEach(element => {
        console.log(element)
    });
    console.log()
}

//getMovieByName('O Senhor dos Anéis: O Retorno do Rei')
getMovieById(4)