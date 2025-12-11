import { addVehicles, listVehicles, listVehiclesById, updateVehicle } from "../controller/vehicles-controller.js"

export async function vehiclesRoutes(fastify, opt) {
  fastify.get('/', listVehicles)
  fastify.get('/:id', listVehiclesById)
  fastify.post('/', addVehicles)
  fastify.put('/:id', updateVehicle)
}