/*
1. Variáveis e Tipos
Crie variáveis que armazenem:
Seu nome (string)
Sua idade (number)
Se você é estudante (boolean)
Depois, mostre no console os valores e seus tipos (typeof).
 */
let name = 'Daniel'
let age = 27
let isStudent = false
console.log(name, 'tem', age, 'anos,', 'é estudante?', isStudent)
console.log(typeof (name), typeof (age), typeof (isStudent))

/*
Operações Aritméticas
Crie duas variáveis a = 15 e b = 4 e calcule:
Soma
Subtração
Multiplicação
Divisão
Resto da divisão (módulo)
Potência
Mostre os resultados no console.
*/
var a = 15
var b = 4
console.log('Soma:', a + b)
console.log('Subtração:', a - b)
console.log('Divisão:', a / b)
console.log('Resto:', a % b)
console.log('Potencia:', a ** b)

/*
Casting (Conversão de tipos)
Converta a string "123" para número e some com o número 7.
Converta o número 45 para string e concatene com " anos".
Pegue o número 3.14159 e converta para inteiro.
*/
console.log(parseInt('123') + 7)
console.log(String(45) + " anos")
console.log(parseInt(3.14159))

/*
Exercício de Preço
Crie uma variável preco = "19.90" (string).
Converta para número.
Some 5 reais de taxa.
Mostre o valor final com duas casas decimais.
*/
console.clear()
var preco = '19.90'
preco = Number(preco)
precoFinal = preco + 5
console.log(precoFinal.toFixed(2))

/*

Média aritmética.
Mostre se a média é maior ou igual a 7 (aprovado) ou menor que 7 (reprovado).
*/

var n1 = 4.5
var n2 = 3.0
var n3 = 2.3
var media = (n1 + n2 + n3) / 3
if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('O JÃO FOI Reprovado')
}

/*
Explique no console o que acontece nos casos:
console.log("5" + 3);
console.log("5" - 3);
console.log(true + 2);
console.log(false + 10);
*/
console.log("5" + 3); // 53
console.log("5" - 3); //2
console.log(true + 2); //3
console.log(false + 10); //10