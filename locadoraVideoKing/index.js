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
        console.log(movie)
    }
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

getMovieByDirector("Tarantino")
