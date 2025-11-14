import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors"
import { configDotenv } from "dotenv";
import { taskRoutes } from "./routes/tasks-routes.js";

configDotenv()

const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: '*' })

fastify.register(fastifySwagger, {
    swagger: {
        info: {
            title: 'Task API',
            description: 'Documentação de uma api de tarefas.',
            version: '1.0.0'
        },
        host: `localhost:${process.env.PORT ?? 3000}`,
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
})

fastify.register(fastifySwaggerUi, { routePrefix: '/docs', exposeRoute: true })

fastify.register(taskRoutes, { prefix: '/tasks' })

fastify.listen({ port: process.env.PORT ?? 3000 }, (err, addr) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    console.log(`🫷🥺🫸 Server running on ${addr}`)
})