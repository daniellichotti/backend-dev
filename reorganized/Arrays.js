//Duas formas de criar arrays
const frutas = ['maçã', 'mamão', 'uva', 'banana']
const frutasArray = new Array('manga', 'morango')

console.log(frutasArray)//printa o array

//acessando elementos do array
console.log(frutas[4])

//modificando elementos do array
frutas[3] = 'pêra'
console.log(frutas[3])


//percorrendo um array com while e for
var i = 0
while (i < frutas.length) {
    console.log(frutas[i])
    i++
}


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}


//métodos de arrays
var idades = [18, 19, 30, 22, 60]

idades.forEach(function (idade) {
    console.log(idade)
})

var idadesDobradas = idades.map(function (idade) {
    return idade + 1
})

console.log(idadesDobradas)

var alunos = ['Joãozinho', 'Léo', 'Gabriel', 'Matheus']
var alunosMaiusculo = alunos.map(function (aluno) {
    return aluno.toUpperCase()
})
console.log(alunos)
console.log(alunosMaiusculo)

/*
Crie um array com 5 nomes de filmes
Use o método forEach() para exibir no console a frase:
“Eu gosto de [nomeFilme]"

Faça um array de preços. Use o map para criar um novo array com os preços, porém se algum for maior que R$100,00 , aplique 15% de desconto. Mostre com 2 casas decimais.
*/

var filmes = ['Interestelar', 'O Senhor dos Aneis', 'Minecraft', 'Como Treinar seu Dragão']
filmes.forEach(function (filme) {
    console.log(`Eu gosto de ${filme}`)
})

var precos = [99.99, 110.80, 20.30, 1.99, 200.00]
var newPrecos = precos.map(function (preco) {
    if (preco > 100) {
        return (preco * 0.85).toFixed(2)
    } else {
        return preco.toFixed(2)
    }
})

console.log(newPrecos)


//array de objetos
const arrayObj = [
    { name: 'João', idade: 35 },
    { name: 'Leo', idade: 35 },
    { name: 'Luizmar', idade: 16 },
    { name: 'Gabriel', idade: 16 }
]

//acessando um item do obj dentro do array
console.log(arrayObj[2].idade)


arrayObj.forEach(function (obj) {
    if (obj.idade >= 18) {
        console.log(`${obj.name} pode dirgir!`)
    } else {
        console.log(`${obj.name} não pode dirgir!`)
    }
})

arrayObj.forEach(obj => {
    if (obj.idade >= 18) {
        console.log(obj.name)
    }
})

//FILTER
const alunosMaioresDeIdadoSemArrow = arrayObj.filter(function (obj) {
    return obj.idade < 18
})
const alunosMaioresDeIdade = arrayObj.filter(obj => obj.idade < 18)

console.log(alunosMaioresDeIdade)

//listas podem ter tipos diferentes
var typesArray = [true, 2, 3.14, 'PI']

//Propriedades e métodos do array
var fruits = ['apple', 'banana', 'orange', 'watermelon', 'strawberry']


//length, primeiro e ultimo(dinamico)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length - 1])

//sort
console.log(fruits)
console.log(fruits.sort())

//push
console.log(fruits)
fruits.push('grape', 'jabutycabe')
console.log(fruits)

//pop
console.log(fruits)
console.log(fruits.pop())

//shift()
console.log(fruits)
fruits.shift()//retorna o elemento tirado
console.log(fruits)

//unshift()
console.log(fruits)
fruits.unshift('lemon')//retorna o elemento tirado
console.log(fruits)

console.clear()
//verificar se existe um elemento
console.log(fruits.includes('lemon')) //retorna bool

//verificar o índice de um elemento
console.log(fruits.indexOf('orange')) //retorna um indice
console.log(fruits[2])

//find
const result = fruits.find((fruit) => fruit === 'orange')
console.log(result)

//slice - FATIAR -> array.slice(inicio, final)
console.log(fruits)
let newFruits = fruits.slice(0, 2)
let newFruits2 = fruits.slice(4, 6)
let newFruits3 = fruits.slice(-3)
console.log(newFruits)
console.log(newFruits2)

//concat
const fruitsConcat = newFruits.concat(newFruits2)
console.log(fruitsConcat)

//EXERCICIOS

/*
crie uma lista com 3 pessoas
verifique se existe uma 4a
se nao existir, add, se existir avise
*/
var listPessoas = ['Leo', 'Gabriel', 'Lightsea']
var novoUsuario = 'Leo'
if (listPessoas.includes(novoUsuario)) {
    console.log('Este usuário ja existe')
} else {
    listPessoas.push(novoUsuario)
    console.log('Usuario add com sucesso!')
}

console.log(listPessoas)

/*
  Somar os números pares de uma lista
  Dado um array de números, some apenas os números pares.
*/
var listaNum = [2, 4, 3, 6, 10, 22, 45, 33, 21, 100, 5, 4, 3, 9, 5, 6]
let soma = 0
for (let i = 0; i < listaNum.length; i++) {
    if (listaNum[i] % 2 == 0) {
        soma = soma + listaNum[i]
    }
}

console.log(soma)



/* 
Contar quantos elementos são maiores que 20
Use um loop e condição para contar quantos números são maiores que 20.
*/
var listaNum = [2, 4, 3, 6, 10, 45, 33, 21, 100, 5, 4, 3, 9, 5, 6]
let contador = 0
for (let i = 0; i < listaNum.length; i++) {
    if (listaNum[i] > 20) {
        contador++
    }
}
console.log(contador)

/*
Filtrar pessoas maiores de idade
Crie uma função que recebe uma lista de objetos pessoa com nome e idade, e retorna apenas as maiores de 18 anos.
*/
const users = [
    { nome: 'Matheus', age: 38 },
    { nome: 'Jennifer', age: 21 },
    { nome: 'Luizmar', age: 16 },
    { nome: 'Gabriel', age: 16 },
]

users.forEach(user => {
    if (user.age >= 18) {
        console.log(user.nome)
    }
})

users.filter(user => user.age >= 18).forEach(user => console.log(user.nome))

/* 
Dado um array de strings, retorne um novo array com os nomes em letras maiúsculas.
usar .toUpperCase() para string ficar maiúscula
*/
const nameList = ['Matheus', 'Jennifer', 'LightSea', 'Flavio', 'Gabriel', 'Janilto']

const newNameList = nameList.map(name => name.toUpperCase())
console.log(newNameList)

/* 
Calcular média de notas
Crie uma função que recebe um array de notas e retorne a média. Se a média for maior que 7, retorne "Aprovado", senão "Reprovado".
*/
const scoreList = [9.0, 1.1, 4.3]
function checkScore(list) {
    let soma = 0
    list.forEach(score => soma = soma + score)
    return (soma / list.length) >= 6 ? 'Aprovado' : 'Reprovado'
}
console.log(checkScore(scoreList))

/*
Sistema de Cadastro de Alunos
Descrição: Crie uma classe Aluno com os atributos nome, idade e notas (lista de números). Adicione métodos para:
Calcular a média
Verificar se o aluno está aprovado (média ≥ 7)
Objetivo: Praticar classe, lista, repetição e condicional.
*/
console.clear()

class Student {
    constructor(name, age, scoreList) {
        this.name = name
        this.age = age
        this.scoreList = scoreList
    }

    checkFinalScore() {
        let finalScore = 0
        this.scoreList.forEach(score => finalScore = finalScore + score)
        return (finalScore / this.scoreList.length).toFixed(1)
    }

    isAproved() {
        return this.checkFinalScore() >= 6 ? 'Aproved' : 'Not Aproved'
    }
}

const student1 = new Student('José', 20, [9.9, 7.8, 8.0])
const student2 = new Student('Pedro', 30, [6.0, 6.2, 6.0])
console.log(student2.isAproved())

/*
Gerenciador de Tarefas
Descrição: Crie uma classe Tarefa com título, descrição, hora e data adicionada e status (pendente ou concluída). Faça um programa que permita criar tarefas, marcar como concluídas e listar todas.
Objetivo: Trabalhar com objetos, listas, condicionais e repetição.
*/

class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.date = new Date()
        this.status = false
    }

    switchStatus() {
        this.status = !this.status
    }
}

let taskList = []

let title = 'Estudar Python'
let description = 'Estudar muito para a prova!'

taskList.push(new Task(title, description))
taskList.push(new Task('Estudar HTML', 'Estudar 1h!'))

taskList[0].switchStatus()
console.log(`A tarefa '${taskList[0].title}' foi adicionada dia ${taskList[0].date.getDate()}/${taskList[0].date.getMonth() + 1}/${taskList[0].date.getFullYear()} e está ${taskList[0].status ? 'não pendente' : 'pendente'}`)