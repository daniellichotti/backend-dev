import cors from "@fastify/cors";
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import Fastify from 'fastify';
import fs from 'fs';
import { contactListRoutes } from './routes/contactListRoutes.js';

const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
const contactList = db.contactList

function saveToDB() {
  fs.writeFileSync('./db.json', JSON.stringify({ contactList }, null, 4, 'utf-8'))
}

const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: '*' })

fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'ContactList API',
      description: 'Documentação da API de Lista de Contatos',
      version: '1.0.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
})

fastify.register(fastifySwaggerUi, { routePrefix: '/docs', exposeRoute: true })

fastify.register(contactListRoutes, { prefix: '/contacts', contactList, saveToDB })

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`✅ Server running on ${address}`)
  console.log(`📄 Documentation on ${address}/docs`)
})