import Fastify from "fastify";
import fs from 'fs';
import { petsRoutes } from "./routes/pets.js";
import { tutorsRoutes } from "./routes/tutors.js";

const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
const pets = db.pets
const tutors = db.tutors

function saveToDB() {
    fs.writeFileSync('./db.json', JSON.stringify({ pets, tutors }, null, 4, 'utf-8'))
}

const fastify = Fastify({ logger: true })

fastify.register(petsRoutes, { prefix: '/pets', pets, saveToDB })
fastify.register(tutorsRoutes, { prefix: '/tutors', tutors, saveToDB })


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server running on ${address}`)
})