import { sendEmail } from "../utils/sendEmail.js"

export async function taskRoutes(fastify, opts) {

    fastify.get('/', async (req, res) => {
        await sendEmail(
            'danielclichotti@gmail.com',
            'Fala galera',
            `<h1>Olá meu amigo</h1>
            <p>Mensagem enviada com sucesso</p>`
        )
        res.send('Lista de tarefas')
    })
}