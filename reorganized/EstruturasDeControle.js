// if else
function EhMaior(age) {
    if (age >= 18) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
}

EhMaior(15)


var nota = 22

if (nota >= 70) {
    console.log('A nota é maior ou igual a 70')
} else if (nota >= 30) {
    console.log('A nota é maior ou igual a 30')
} else if (nota >= 20) {
    console.log('A nota é maior ou igual a 20')
} else {
    console.log('A nota é menor que 20')
}

var nome = 'João'

if (nome == 'João') {
    console.log('Reprovado')
} else {
    console.log('Aprovado')
}

// Switch Case

var option = 100

switch (option) {
    case 1:
        console.log('Opção 1 escolhida')
        break
    case 2:
        console.log('Opção 2 escolhida')
        break
    case 3:
        console.log('Opção 3 escolhida')
        break
    default:
        console.log('Opção invalida')
        break
}


var option = 'Pedro'

switch (option) {
    case 'João':
        console.log('Reprovado')
        break
    default:
        console.log('Aprovado')
        break
}

function TemDesconto(valor) {
    if (valor > 200) {
        valor = valor - 0.1 * valor
        return valor
    } else {
        return valor
    }
}

console.log(TemDesconto(2000))


//Estruturas de repetição

var contagem = 10

while (contagem > 0) {
    console.log(contagem)
    contagem--
}

console.log('Terminou o loop')

/*
Exercicio
Faça um while que mostre todos numeros pares entre 0 e 10
*/

function ParesAteN(n) {
    while (n > 0) {
        if (n % 2 == 0) {
            console.log(n)
        }
        n--
    }
}

//do while
function ParesAteNWhile(n) {
    do {
        console.log(n)
        n--
    } while (n > 0)
}

ParesAteNWhile(10)

//FOR
function ParesAteNComFor(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

ParesAteNComFor(20)

console.clear()