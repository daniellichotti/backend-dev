import { v4 } from "uuid"

export async function tutorsRoutes(fastify, opts) {
  const { tutors, saveToDB } = opts

  const tutorsSchema = {
    type: 'object',
    required: ['nome', 'idade'],
    properties: {
      id: { type: 'string' },
      nome: { type: 'string' },
      idade: { type: 'integer' }
    }
  }

  fastify.get('/', function (request, response) {
    response.send(tutors)
  })

  fastify.get('/:id', function (request, response) {
    const tutor = tutors.find(t => String(t.id) == request.params.id)

    tutor ? response.send(tutor) : response.code(404).send({ error: 'Tutor não encontrado!' })
  })

  fastify.post('/', {
    schema: {
      description: 'Cria um novo tutor',
      tags: ['Tutors'],
      body: {
        type: 'object',
        required: ['nome', 'idade'],
        properties: {
          nome: { type: 'string' },
          idade: { type: 'integer' }
        }
      }
    },
    response: {
      201: tutorsSchema
    }
  }, function (request, response) {
    const newTutor = { id: v4(), ...request.body }

    tutors.push(newTutor)
    saveToDB()
    response.code(201).send(newTutor)
  })

  fastify.patch('/:id', function (request, response) {
    const tutor = tutors.find(t => String(t.id) == request.params.id)

    if (!tutor) {
      return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    Object.assign(tutor, request.body)

    saveToDB()
    response.code(202).send(tutor)

  })

  fastify.put('/:id', function (request, response) {
    const index = tutors.findIndex(t => String(t.id) == request.params.id)

    if (index === -1) {
      return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    tutors[index] = { id: request.params.id, ...request.body }

    saveToDB()

    response.code(200).send(tutors[index])

  })

  fastify.delete('/:id', function (request, response) {
    const index = tutors.findIndex(t => String(t.id) == request.params.id)

    if (index === -1) {
      return response.code(404).send({ error: 'Tutor não encontrado!' })
    }

    tutors.splice(index, 1)
    //npm install --save-dev nodemon

    saveToDB()

    response.code(200).send({ message: 'Tutor deletado.' })
  })

}