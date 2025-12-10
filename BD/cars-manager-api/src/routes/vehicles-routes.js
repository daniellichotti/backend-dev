import { getAllVehicles } from "../services/vehicles-services.js"

export async function vehiclesRoutes(fastify, opt) {
  fastify.get('/', async (req, res) => {
    const vehicles = await getAllVehicles()

    res.send(vehicles)
  })
}