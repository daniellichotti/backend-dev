import { v4 } from "uuid"

export async function petsRoutes(fastify, opts) {
  const { pets, saveToDB } = opts

  fastify.get('/', function (request, response) {
    response.send(pets)
  })

  fastify.get('/:id', function (request, response) {
    const pet = pets.find(p => String(p.id) == request.params.id)

    pet ? response.send(pet) : response.code(404).send({ error: 'Pet não encontrado!' })
  })

  fastify.post('/', function (request, response) {
    const newPet = { id: v4(), ...request.body }

    pets.push(newPet)
    saveToDB()
    response.code(201).send(newPet)

  })

  fastify.patch('/:id', function (request, response) {
    const pet = pets.find(p => String(p.id) == request.params.id)

    if (!pet) {
      return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    Object.assign(pet, request.body)

    saveToDB()
    response.code(202).send(pet)

  })

  fastify.put('/:id', function (request, response) {
    const index = pets.findIndex(p => String(p.id) == request.params.id)

    if (index === -1) {
      return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    pets[index] = { id: request.params.id, ...request.body }

    saveToDB()

    response.code(200).send(pets[index])

  })

  fastify.delete('/:id', function (request, response) {
    const index = pets.findIndex(p => String(p.id) == request.params.id)

    if (index === -1) {
      return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    pets.splice(index, 1)
    //npm install --save-dev nodemon

    saveToDB()

    response.code(200).send({ message: 'Resource deleted' })
  })
}