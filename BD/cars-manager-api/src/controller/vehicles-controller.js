import { createVehicle, getAllVehicles } from "../services/vehicles-services.js"


export async function listVehicles(req, res) {
  const vehicles = await getAllVehicles()

  return res.send(vehicles)
}

export async function addVehicles(req, res) {
  const { type, brand, model, year } = req.body

  const newVehicle = await createVehicle(type, brand, model, year)

  return res.code(201).send(newVehicle)
}