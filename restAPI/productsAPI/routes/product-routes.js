import { v4 } from "uuid"

export async function productRoutes(fastify, opts) {
    const { products, saveToDB } = opts

    const productSchema = {
        type: 'object',
        required: ['nome', 'price', 'quantity'],
        properties: {
            id: { type: 'string' },
            nome: { type: 'string' },
            price: { type: 'number' },
            quantity: { type: 'integer' }
        }
    }

    fastify.get('/', {
        schema: {
            description: 'Lista produtos.',
            tags: ['Product'],
        },
        response: {
            201: productSchema
        }
    }, function (request, response) {
        //console.log(priceFilter(products, 3.00)) LISTA FILTRADA

        response.send(products)
    })

    fastify.get('/:id', {
        schema: {
            description: 'Lista produto por ID.',
            tags: ['Product'],
        },
        response: {
            201: productSchema
        }
    }, function (request, response) {
        const product = products.find(p => String(p.id) == request.params.id)

        product ? response.send(product) : response.code(404).send({ error: 'Produto não encontrado!' })
    })

    fastify.post('/', {
        schema: {
            description: 'Cria um novo produto.',
            tags: ['Product'],
            body: {
                type: 'object',
                required: ['nome', 'price', 'quantity'],
                properties: {
                    nome: { type: 'string' },
                    price: { type: 'number' },
                    quantity: { type: 'integer' }
                }
            }
        },
        response: {
            201: productSchema
        }
    }, function (request, response) {
        const newProduct = { id: v4(), ...request.body }

        if (newProduct.price <= 0) {
            response.code(400).send('Preço inválido!')
        } else {
            products.push(newProduct)

            saveToDB()

            response.code(201).send(newProduct)
        }
    })

    fastify.patch('/:id', {
        schema: {
            description: 'Altera o estoque de um produto.',
            tags: ['Product'],
            body: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    price: { type: 'number' },
                    quantity: { type: 'integer' }
                }
            }
        },
        response: {
            201: productSchema
        }
    }, function (request, response) {
        const product = products.find(p => String(p.id) == request.params.id)

        if (!product) {
            return response.code(404).send({ error: 'Produto não encontrado!' })
        }

        Object.assign(product, request.body)

        saveToDB()
        response.code(202).send(product)
    })

};

function priceFilter(products, minPrice) {
    const listFiltered = products.filter(product => product.price > minPrice)

    return listFiltered
}