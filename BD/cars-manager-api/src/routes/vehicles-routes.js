export async function vehiclesRoutes(fastify, opt) {
  fastify.get('/', async (req, res) => {
    res.send("Hello World")
  })
}