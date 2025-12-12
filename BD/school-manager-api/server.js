import cors from "@fastify/cors";
import Fastify from 'fastify';
import { schoolManagerRoutes } from "./routes/school-manager-routes.js";

const fastify = Fastify({ logger: true })

fastify.register(cors, { origin: '*' })

fastify.register(schoolManagerRoutes, { prefix: '/school' })

fastify.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`✅ Server running on ${address}`)
  console.log(`📄 Documentation on ${address}/docs`)
})