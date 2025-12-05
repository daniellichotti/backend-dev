import { conn } from "./db.js";

function fetchUsersTable() {
  conn.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log("Erro ao buscar todos usuários!", err)
      return
    }

    console.log("Usuários encontrados: ")
    console.log(results)
  })
}

/*
function createUser(name, email, password) {
  conn.query(`INSERT INTO users (nome, email, senha) VALUES ("${name}","${email}","${password}")`, (err) => {
    if (err) {
      console.log("Erro ao add usuario!", err)
      return
    }
    console.log("Usuários adicionado!")
  })
}

NUNCA FAZER ASSIM!!!
*/

function createUser(name, email, password) {
  const sqlQuery = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)"
  const values = [name, email, password]

  conn.query(sqlQuery, values, (err) => {
    if (err) {
      console.log("Erro ao add usuario!", err)
      return
    }
    console.log("Usuários adicionado!")
  })
}

function getUserById(id) {
  const sqlQuery = "SELECT * FROM users WHERE id = ?"
  const values = [id]

  conn.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.log("Erro ao buscar usuario!", err)
      return
    }
    console.log("Usuário encontrado!")
    console.log(results)
  })
}

//createUser("Leo", "leozinhonew@email.com", "123")
//fetchUsersTable()
getUserById(3)
conn.end()