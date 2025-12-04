# Comando usados para instalar as bibliotecas

npm install fastify @fastify/swagger @fastify/swagger-ui @fastify/cors dotenv uuid nodemon nodemailer

## Prisma e PrismaClient

```
npm install prisma --save-dev
npm install @prisma/client
```

### Inicializar Prisma:

`npx prisma init --datasource-provider sqlite`
depois fazer o migrate e o generate:
`npx prisma migrate dev --name init`
`npx prisma generate`

API de Tarefas (To-Do List)

CRUD de tarefas
CREATE READ UPDATE DELETE

Filtros: concluídas, pendentes

//TODO
Autenticação simples (JWT)

### Docker

Docker run:

```
 docker run -d --name meu-primeiro-container-sql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=my-data-base -p 3306:3306 mysql:8
```
