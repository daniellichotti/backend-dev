import mysql from 'mysql2'

export const conn = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "123",
  database: "school-db",
})

conn.connect((err) => {
  if (err) {
    console.log("Erro ao conectar: ", err)
    return
  }
  console.log("Conectado ao MySQL")
})