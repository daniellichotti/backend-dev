import Fastify from "fastify";
import fs from 'fs'
import { v4 } from "uuid";


const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
const pets = db.pets
const tutors = db.tutors

const fastify = Fastify({ logger: true })

function saveToDB() {
    fs.writeFileSync('./db.json', JSON.stringify({ pets, tutors }, null, 4, 'utf-8'))
}

fastify.get('/pets', function (request, response) {
    response.send(pets)
})

fastify.get('/tutors', function (request, response) {
    response.send(tutors)
})

fastify.get('/pets/:id', function (request, response) {
    const pet = pets.find(p => String(p.id) == request.params.id)

    pet ? response.send(pet) : response.code(404).send({ error: 'Pet não encontrado!' })
})

fastify.get('/tutors/:id', function (request, response) {
    const tutor = tutors.find(t => String(t.id) == request.params.id)

    tutor ? response.send(tutor) : response.code(404).send({ error: 'Tutor não encontrado!' })
})

fastify.post('/pets', function (request, response) {
    const newPet = { id: v4(), ...request.body }

    pets.push(newPet)
    saveToDB()
    response.code(201).send(newPet)

})

fastify.post('/tutors', function (request, response) {
    const newTutor = { id: v4(), ...request.body }

    tutors.push(newTutor)
    saveToDB()
    response.code(201).send(newTutor)

})

fastify.patch('/pets/:id', function (request, response) {
    const pet = pets.find(p => String(p.id) == request.params.id)

    if (!pet) {
        return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    Object.assign(pet, request.body)

    saveToDB()
    response.code(202).send(pet)

})

fastify.patch('/tutors/:id', function (request, response) {
    const tutor = tutors.find(t => String(t.id) == request.params.id)

    if (!tutor) {
        return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    Object.assign(tutor, request.body)

    saveToDB()
    response.code(202).send(tutor)

})

fastify.put('/pets/:id', function (request, response) {
    const index = pets.findIndex(p => String(p.id) == request.params.id)

    if (index === -1) {
        return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    pets[index] = { id: request.params.id, ...request.body }

    saveToDB()

    response.code(200).send(pets[index])

})

fastify.put('/tutors/:id', function (request, response) {
    const index = tutors.findIndex(t => String(t.id) == request.params.id)

    if (index === -1) {
        return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    tutors[index] = { id: request.params.id, ...request.body }

    saveToDB()

    response.code(200).send(tutors[index])

})

fastify.delete('/pets/:id', function (request, response) {
    const index = pets.findIndex(p => String(p.id) == request.params.id)

    if (index === -1) {
        return response.code(404).send({ error: 'Pet não encontrado!' })
    }

    pets.splice(index, 1)
    //npm install --save-dev nodemon

    saveToDB()

    response.code(200).send({ message: 'Resource deleted' })
})

fastify.delete('/tutors/:id', function (request, response) {
    const index = tutors.findIndex(t => String(t.id) == request.params.id)

    if (index === -1) {
        return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    tutors.splice(index, 1)
    //npm install --save-dev nodemon

    saveToDB()

    response.code(200).send({ message: 'Tutor deletado.' })
})


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`Server running on ${address}`)
})