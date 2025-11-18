import { prisma } from '../lib/prisma.js'

export async function taskRoutes(fastify, opts) {

    fastify.get('/', async (req, res) => {
        // await sendEmail(
        //     'danielclichotti@gmail.com',
        //     'Fala galera',
        //     `<h1>Olá meu amigo</h1>
        //     <p>Mensagem enviada com sucesso</p>`
        // )
        const tasks = await prisma.task.findMany()

        res.send(tasks)
    })
}