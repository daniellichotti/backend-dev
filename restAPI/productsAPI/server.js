import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { configDotenv } from "dotenv";
import Fastify from "fastify";
import fs from 'fs';
import { productRoutes } from "./routes/product-routes.js";

configDotenv()

const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
const products = db.products

function saveToDB() {
    fs.writeFileSync('./db.json', JSON.stringify({ products }, null, 4, 'utf-8'))
}

const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: '*' })

//configuração do swagger
fastify.register(fastifySwagger, {
    swagger: {
        info: {
            title: 'Products API',
            description: 'Documentação da API de Produtos',
            version: '1.0.0'
        },
        host: `localhost:${process.env.PORT ?? 3000}`,
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
})

fastify.register(fastifySwaggerUi, { routePrefix: '/docs', exposeRoute: true })

fastify.register(productRoutes, { prefix: '/products', products, saveToDB })


fastify.listen({ port: process.env.PORT ?? 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`✅ Server running on ${address}`)
    console.log(`📄 Documentation on ${address}/docs`)
})