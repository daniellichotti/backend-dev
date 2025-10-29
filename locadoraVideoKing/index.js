const API_URL = "http://localhost:3000"

//GET
async function getData(endpoint) {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Erro: ', error)
    }
}

async function getMovieByName(title) {
    const movieList = await getData('movies')
    let movie = null
    //console.log(movieList.map(movie => movie.title).includes(title)) 
    //TODO

    for (let i = 0; i < movieList.length; i++) {
        if (title == movieList[i].title) {
            movie = movieList[i]
        }
    }

    if (movie == null) {
        console.log("Filme não encontrado")
    } else {
        formatMovieData(movie)
    }
}

function formatMovieData({ id, directorId, title, rating, duration }) {
    console.log(`Título: ${title}`)
    console.log(`Rating: ${rating} estrelas`)
    console.log(`Duração: ${durationInHours(duration)}`)
    console.log('-------------------------------------------')
}

function durationInHours(duration) {
    const durationHours = duration / 60

    return `${parseInt(durationHours)}h ${duration - parseInt(durationHours) * 60}min`
}

async function getMovieByDirector(directorName) {
    const directorsList = await getData('directors')
    const movieList = await getData('movies')
    let director = null
    let movies = []

    for (let i = 0; i < directorsList.length; i++) {
        if (directorName == directorsList[i].name) {
            director = directorsList[i]
        }
    }

    if (director == null) {
        console.log('Diretor não encontrado!')
        return
    }

    for (let i = 0; i < movieList.length; i++) {
        if (director.id == movieList[i].directorId) {
            movies.push(movieList[i])
        }
    }
    console.log(movies)
}

async function addMovie(movie) {
    const response = await fetch(`${API_URL}/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
    })

    if (response.ok) {
        console.log('Filme adicionado com sucesso!')
    } else {
        console.log('Falha ao adicionar filme!')
    }
}

async function deleteMovie(id) {
    const response = await fetch(`${API_URL}/movies/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })

    if (response.ok) {
        console.log('Filme deletado com sucesso!')
    } else {
        console.log('Falha ao deletar filme!')
    }
}

async function updateMovie(id, movie) {
    const response = await fetch(`${API_URL}/movies/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
    })

    if (response.ok) {
        console.log('Filme alterado com sucesso!')
    } else {
        console.log('Falha ao alterar o filme!')
    }
}

const movie = {
    "rating": 5
}

//addMovie(movie)
//deleteMovie("df01")
//updateMovie(4, movie)

getMovieByName("Pump Fiction")