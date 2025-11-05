import Fastify from "fastify";
import fs from 'fs'
import { v4 } from "uuid";

const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
const pets = db.pets
const tutors = db.tutors

const fastify = Fastify({ logger: true })

function saveToDB() {
    fs.writeFileSync('./db.json', JSON.stringify({ pets, tutors }), null, 4, 'utf-8')
}

fastify.get('/pets', function (request, response) {
    response.send(pets)
})

fastify.get('/tutors', function (request, response) {
    response.send(tutors)
})

fastify.get('/pets/:id', function (request, response) {
    const pet = pets.find(p => p.id === Number(request.params.id))

    pet ? response.send(pet) : response.code(404).send({ error: 'Pet não encontrado!' })
})

fastify.post('/pets', async function (request, response) {
    const newPet = { id: v4(), ...request.body }

    pets.push(newPet)
    saveToDB()
    response.code(201).send(newPet)
})

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`server running on ${address}`)
})
