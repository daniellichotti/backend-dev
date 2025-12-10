import { db } from "../database/connection.js";

export async function getAllVehicles() {
  const [vehicles] = await db.query("SELECT * FROM vehicles");
  return vehicles;
}