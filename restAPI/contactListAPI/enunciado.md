Projeto: API de Agenda de Contatos com Fastify

Desenvolva uma API REST utilizando Node.js + Fastify que funcione como uma Agenda de Contatos.
O projeto deve seguir os requisitos abaixo:

1. Tecnologias obrigatórias

Fastify

Validação de dados

Documentação da API usando Swagger

Persistência dos dados em um arquivo db.json

2. Modelo de dados (Contato)

Cada contato deve possuir:

id - String (uuid) -  Gerado automaticamente
name - String - Nome do contato
phone - String - Telefone
email - String - E-mail válido
tags -  array de strings - Lista de categorias (ex: "amigos", "trabalho")

Os unicos opcionais sao o email e o tags.

3. Endpoints obrigatórios 

POST /contacts

Cria um novo contato.

Deve validar o body usando JSON Schema.

O id deve ser gerado automaticamente.

GET /contacts

Lista todos os contatos.

GET /contacts/:id

Retorna um contato específico.

Caso não exista, retornar 404.

PUT /contacts/:id

Atualiza dados de um contato existente.

Se o contato não existir, retornar 404.

DELETE /contacts/:id

Remove um contato pelo id.

Se não existir, retornar 404.

4. Persistência

Os dados devem ser lidos e gravados em um arquivo chamado db.json, no formato:

{ "contacts": [] }
As operações de criar, atualizar e remover devem atualizar esse arquivo.

5. Documentação

A API deve ter documentação acessível em /docs usando:

@fastify/swagger

@fastify/swagger-ui

TODOS os endpoints devem estar documentados.

Objetivo do projeto

Ao final, o aluno deve demonstrar que compreende:

Criação de APIs com Fastify

Validação

Organização modular de rotas

Persistência de dados sem banco (arquivo)


Documentação de API com Swagger