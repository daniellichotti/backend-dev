import { conn } from "../database/connection.js"

export async function schoolManagerRoutes(fastify) {
  fastify.get('/', function (request, response) {

    conn.query("SELECT * FROM aluno", (err, results) => {
      if (err) {
        console.log("Erro ao buscar todos usuários!", err)
        return
      }

      console.log("Usuários encontrados: ")
      console.log(results)
      response.send(results)
    })

  })


}