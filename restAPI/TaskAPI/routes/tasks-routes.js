import { prisma } from '../lib/prisma.js'

export async function taskRoutes(fastify, opts) {

    const taskSchema = {
        type: 'object',
        required: ['title', 'description'],
        properties: {
            id: { type: 'id' },
            title: { type: 'string' },
            description: { type: 'string' },
            createdAt: { type: 'string' },
            completedAt: { type: 'string' },
        }
    }

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

    fastify.post('/', {
        schema: {
            description: 'Cria uma nova Task',
            tags: ['Task'],
            body: {
                type: 'object',
                required: ['title', 'description'],
                properties: {
                    title: { type: 'string' },
                    description: { type: 'string' }
                }
            }
        },
        response: {
            201: taskSchema
        }
    }, async (req, res) => {
        const { title, description } = req.body

        const tasks = await prisma.task.create({
            data: { title, description }
        })

        res.code(201).send(tasks)
    })

    fastify.delete('/:id', async (req, res) => {
        const { id } = req.params

        await prisma.task.delete({
            where: { id: Number(id) }
        })

        res.code(200).send("Deletado com sucesso!")
    })

    fastify.patch('/:id', async (req, res) => {
        const { id } = req.params


        const task = await prisma.task.update({
            where: { id: Number(id) },
            data: {
                completedAt: new Date()
            }
        })

        res.code(200).send(task)
    })


}