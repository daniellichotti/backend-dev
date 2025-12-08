Criar container:
docker run -d --name meu-primeiro-container-sql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=my-data-base -p 3307:3306 mysql:8

Listar containers: docker ps
Iniciar container: docker start <container_id>
Entrar no terminal do container: docker exec -it <container_id> mysql -u root -p

Escolher BD: use my-data-base;

Criar tabelas:
CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL,
criadoEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE admins (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL,
criadoEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

Inserir Dados na tabela:
INSERT INTO users (nome, email, senha) VALUES ("Pedro", "pedrinho@yahoo.com.br","123");
INSERT INTO admins (email,senha) VALUES ("dnl@example.com", "123");

Deletar tabela:
DROP TABLE users
