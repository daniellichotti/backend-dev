import cors from "@fastify/cors"
import Fastify from "fastify"
import { vehiclesRoutes } from "./routes/vehicles-routes.js"

export function buidApp() {
  const app = Fastify({ logger: true })

  app.register(cors, { origin: '*' })

  app.register(vehiclesRoutes, { prefix: '/vehicles' })

  return app
}