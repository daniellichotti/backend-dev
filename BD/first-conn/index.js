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

function fetchLastUsers(table, qnt) {
  const sqlQuery = `SELECT * FROM ${table} ORDER BY id DESC LIMIT ?;`
  const values = [qnt]

  conn.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.log("Erro ao buscar todos usuários!", err)
      return
    }

    console.log("Usuários encontrados: ")
    console.log(results)
  })
}

function updatePassword(email, newPassword) {
  const sqlQuery = "UPDATE users SET senha=? WHERE email=?"
  const values = [newPassword, email]

  conn.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.log(`Erro ao atualizar senha do usuário ${email}!`, err)
      return
    }

    console.log("Senha atualizada!")
  })
}

function deleteUser(id) {
  const sqlQuery = "DELETE FROM alunos WHERE id = ?;"
  const values = [id]

  conn.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.log(`Erro ao deletar aluno!`, err)
      return
    }

    console.log("Aluno deletado!")
  })
}

//createUser("Leo", "leozinhonew@email.com", "123")
//updatePassword("gabriel@gmail.com", "24")
//fetchUsersTable()
//getUserById(1)
deleteUser(7)
fetchLastUsers('alunos', 1)
conn.end()