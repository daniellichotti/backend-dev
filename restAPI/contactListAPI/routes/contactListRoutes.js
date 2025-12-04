import { v4 } from "uuid"

export async function contactListRoutes(fastify, opts) {
  const { contactList, saveToDB } = opts

  const contactSchema = {
    type: 'object',
    required: ['name', 'phone', 'email', 'tags'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      phone: { type: 'string' },
      email: { type: 'string', format: 'email' },
      tags: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  }

  fastify.get('/', {
    schema: {
      description: 'Lista contatos.',
      tags: ['Contatos'],
    },
    response: {
      201: contactSchema
    }
  }, function (request, response) {

    response.send(contactList)
  })

  fastify.get('/:id', {
    schema: {
      description: 'Lista contato por ID.',
      tags: ['Contatos'],
    },
    response: {
      201: contactSchema
    }
  }, function (request, response) {
    const contact = contactList.find(p => String(p.id) == request.params.id)

    contact ? response.send(contact) : response.code(404).send({ error: 'Contato não encontrado!' })
  })

  fastify.post('/', {
    schema: {
      description: 'Cria um novo contato.',
      tags: ['Contatos'],
      body: {
        type: 'object',
        required: ['name', 'phone', 'email', 'tags'],
        properties: {
          name: { type: 'string' },
          phone: { type: 'string' },
          email: { type: 'string', format: 'email' },
          tags: {
            type: 'array',
            items: { type: 'string' }
          }
        }
      }
    },
    response: {
      201: contactSchema
    }
  }, function (request, response) {
    const newContact = { id: v4(), ...request.body }

    contactList.push(newContact)
    saveToDB()

    response.code(201).send(newContact)
  })
}