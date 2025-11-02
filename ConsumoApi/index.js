const API_URL = 'http://192.168.13.44:3000'

async function getData(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`)
    const data = await response.json()
    return data

  } catch (error) {
    console.log('Erro: ', error)
  }
}

async function showMusics(gener) {
  const musicList = await getData('musicas')

  if (!gener) {
    for (const element of musicList) {
      console.log(`Título: ${element.titulo}`)
      console.log(`Artista: ${element.artista}`)
      console.log(`Album: ${element.album}`)
      console.log(`Ano: ${element.ano}`)
      console.log(`Genero: ${element.genero}`)
      console.log(`Duracao: ${element.duracao}`)
      console.log(`#################################`)
      console.log(` `)
    }
    return
  }

  for (const element of musicList) {
    if (gener === element.genero) {
      console.log(`Título: ${element.titulo}`)
      console.log(`Artista: ${element.artista}`)
      console.log(`Album: ${element.album}`)
      console.log(`Ano: ${element.ano}`)
      console.log(`Genero: ${element.genero}`)
      console.log(`Duracao: ${element.duracao}`)
      console.log(`#################################`)
      console.log(` `)
    }
  }
}

async function addMusic(music) {

  const response = await fetch(`${API_URL}/musicas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(music)
  })

  if (response.ok) {
    console.log('Musica adicionada com sucesso!')
  } else {
    console.log('Falha ao adicionar musica!')
  }
}

async function patchMusic(id, music) {
  const response = await fetch(`${API_URL}/musicas/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(music)
  })

  if (response.ok) {
    console.log('Musica atualizada com sucesso!')
  } else {
    console.log('Falha ao atualizar musica!')
  }
}

async function putMusic(id, music) {
  const response = await fetch(`${API_URL}/musicas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(music)
  })

  if (response.ok) {
    console.log('Musica atualizada com sucesso!')
  } else {
    console.log('Falha ao atualizar musica!')
  }
}

async function deleteMusic(id) {
  const response = await fetch(`${API_URL}/musicas/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })

  if (response.ok) {
    console.log('Musica deletada com sucesso!')
  } else {
    console.log('Falha ao deletar musica!')
  }
}

async function deleteByGener(gener) {
  const musicList = await getData('musicas')

  for (const element of musicList) {
    if (element.genero === gener) {
      await deleteMusic(element.id)
    }
  }
}

const music = {
  "genero": "Rock"
}

deleteByGener('Trash metal')
//addMusic(music)
//patchMusic('f97d', music)
//deleteMusic(6)
//showMusics("Hard Rock")
