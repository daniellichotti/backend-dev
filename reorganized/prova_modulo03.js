/*
Crie um objeto dessa classe, realize dois saques (um válido e outro inválido) e exiba os resultados.
*/
class ContaBancaria {
  constructor(titular, saldo, ativa) {
    this.titular = titular
    this.saldo = saldo
    this.ativa = ativa
  }

  sacar(valor) {
    if (this.ativa && this.saldo >= valor) {
      console.log('pode sacar')
    } else {
      console.error('Error: não pode sacar')
    }
  }
}

const newConta = new ContaBancaria('Souza', 2222000, true)
newConta.sacar(2221000)
newConta.sacar(100000000)

/*
Crie uma função chamada filtrarNotasAltas que receba uma lista de notas de alunos (números).
A função deve percorrer a lista com um loop,
Retornar apenas as notas maiores ou iguais a 7,
E imprimir no console a quantidade de notas aprovadas.
Teste sua função com o array [4, 7.5, 9, 3, 8.2, 6].
*/

listaNotasMaioresQueSete = []
listaNotas = [4, 7.5, 9, 3, 8.2, 6]

function filtrarNotasAltas(scoreList) {
  for (let i = 0; i < scoreList.length; i++) {
    if (scoreList[i] >= 7)
      listaNotasMaioresQueSete.push(scoreList[i])
  }
}

filtrarNotasAltas(listaNotas)
console.log('Tem ', listaNotasMaioresQueSete.length, 'notas maiores que 7. Elas são:')
for (let i = 0; i < listaNotasMaioresQueSete.length; i++) {
  console.log(listaNotasMaioresQueSete[i])
}

console.clear

/*

Adicione pelo menos 3 produtos à lista dentro da classe (pode ser no construtor).
Por fim, instancie a classe e chame o método listarCaros().
*/

class Loja {
  constructor(productList) {
    this.productList = productList
  }

  listarCaros() {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].preco > 100) {
        console.log(this.productList[i].nome)
      }
    }
  }
}

let listaAlimentos = [
  { 'nome': 'arroz', 'preco': 22 },
  { 'nome': 'feijao', 'preco': 220 },
  { 'nome': 'ovo', 'preco': 2 },
  { 'nome': 'biscoito', 'preco': 120 },
  { 'nome': 'alface', 'preco': 3 },
]

const newLoja = new Loja(listaAlimentos)
newLoja.listarCaros()

/*
Crie uma função chamada avaliarAluno que receba um objeto com as propriedades nome e nota.
Se a nota for maior ou igual a 7, exiba ${nome} foi aprovado.
Caso contrário, exiba ${nome} foi reprovado.

Teste a função com pelo menos três alunos diferentes, armazenados em uma lista de objetos e percorra essa lista com um loop chamando a função para cada aluno.
*/

function avaliarAluno(objAluno) {
  if (objAluno.nota >= 7) {
    console.log(`${objAluno.nome} foi aprovado!`)
  } else {
    console.log(`${objAluno.nome} foi reprovado!`)
  }
}

let listaAlunos = [
  { 'nome': 'LightSea', 'nota': 6 },
  { 'nome': 'Pedro', 'nota': 8 },
  { 'nome': 'Jão', 'nota': 2 }
]

for (let i = 0; i < listaAlunos.length; i++) {
  avaliarAluno(listaAlunos[i])
}

console.clear()

let numeros = [1, 2, 3];
console.log(numeros)
numeros.forEach(n => console.log(n * 2));