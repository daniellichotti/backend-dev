import { configDotenv } from "dotenv";
import { buidApp } from "./app.js";

configDotenv()

const app = buidApp()

app.listen({ port: process.env.PORT ?? 3000, host: "127.0.0.1" }, (err, addr) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  console.log(`🫷🥺🫸 Server running on ${addr}`)
})