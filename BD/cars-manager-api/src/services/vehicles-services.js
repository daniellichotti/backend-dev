import { v4 } from "uuid";
import { db } from "../database/connection.js";

export async function getAllVehicles() {
  const [vehicles] = await db.query("SELECT * FROM vehicles");
  return vehicles;
}

export async function getVehicleById(id) {
  const [vehicle] = await db.query("SELECT * FROM vehicles WHERE id = ?", [id]);
  return vehicle;
}

export async function updateVehicleService(id, body) {
  const { type, brand, model, year } = body
  const [vehicle] = await db.query("UPDATE vehicles SET type = ?, brand = ?, model = ?, year = ? WHERE id = ?", [type, brand, model, year, id]);

  return vehicle;
}

export async function createVehicle(type, brand, model, year) {
  const [result] = await db.query("INSERT INTO vehicles (id, type, brand, model, year) VALUES (?, ?, ?, ?, ?)", [v4(), type, brand, model, year]);

  return { type, brand, model, year };
}