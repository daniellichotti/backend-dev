import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
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

fastify.register(cors, { origin: '*' })

//configuração do swagger
fastify.register(fastifySwagger, {
    swagger: {
        info: {
            title: 'Pets API',
            description: 'Documentação da API de Pets',
            version: '1.0.0'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
})

fastify.register(fastifySwaggerUi, { routePrefix: '/docs', exposeRoute: true })

fastify.register(petsRoutes, { prefix: '/pets', pets, saveToDB })
fastify.register(tutorsRoutes, { prefix: '/tutors', tutors, saveToDB })


fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`✅ Server running on ${address}`)
    console.log(`📄 Documentation on ${address}/docs`)
})