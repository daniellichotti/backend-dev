import { addVehicles, listVehicles } from "../controller/vehicles-controller.js"

export async function vehiclesRoutes(fastify, opt) {
  fastify.get('/', listVehicles)
  fastify.post('/', addVehicles)
}