/*
Calculadora Simples
Descrição: Uma calculadora que faz operações básicas: soma, subtração, multiplicação e divisão.
Conceitos:
Variáveis (armazenar números)
Operadores (aritméticos)
Funções (cada operação pode ser uma função)
*/

function Soma(x, y) {
    return x + y
}

function Subtracao(x, y) {
    return x - y
}

function Mult(x, y) {
    return x * y
}

function Div(x, y) {
    return x / y
}

var num1 = 3
var num2 = 3

console.log(`A Soma de ${num1} e ${num2} é: ${Soma(num1, num2)}`)
console.log(`A Subtração de ${num1} e ${num2} é: ${Subtracao(num1, num2)}`)
console.log(`A Multiplicação de ${num1} e ${num2} é: ${Mult(num1, num2)}`)
console.log(`A Divisão de ${num1} e ${num2} é: ${Div(num1, num2)}`)

/*
Calculadora de Idade
Descrição: O usuário informa o ano de nascimento e o programa calcula sua idade atual.
Conceitos:
Variáveis (ano atual, ano de nascimento, idade)
Operadores (subtração)
Funções (realizar cálculo)
*/


date = new Date()
console.log(date)
console.log(date.getFullYear()) //retorna o ano
console.log(date.getMonth()) //retorna o mes de 0 a 11 (0 janeiro)
console.log(date.getDay())  //retorna o dia da semana de 0 a 6 (0 domingo)
console.log(date.getDate())  //retorna o dia do mes de 1 a 31
console.log(date.getHours())  //retorna a hora
console.log(date.getMinutes())  //retorna os minutos
console.log(date.getSeconds())  //retorna os segundos
console.log(date.getMilliseconds())  //retorna os milisegundos

console.log(`Agora são ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} do dia ${date.getDate()} do mês ${date.getMonth() + 1} do ano ${date.getFullYear()}`)

function calculaIdade(anoNasc) {
    return date.getFullYear() - anoNasc
}

var anoNasc = 1998

console.log(calculaIdade(anoNasc))

/*
Conversor de Temperatura
Descrição: Converte de Celsius para Fahrenheit e outra para Kelvin
Conceitos:
Variáveis (temperatura)
Operadores (aritméticos)
Funções (conversão)
*/

console.clear()

function CelsiusToFahrenheit(tempEmCelsius) {
    var fahrenheit = (tempEmCelsius * 9 / 5) + 32
    console.log(`A temperatura ${tempEmCelsius}°C equivale a ${fahrenheit}°F`)
}
function CelsiusToKelvin(tempEmCelsius) {
    var kelvin = (tempEmCelsius + 273.15)
    console.log(`A temperatura ${tempEmCelsius}°C equivale a ${kelvin}°K`)
}

CelsiusToFahrenheit(0)
CelsiusToKelvin(0)

/*
Calculadora de Tempo de Viagem
Descrição: Calcula o tempo de uma viagem com base na distância e na velocidade média.
Fórmula: tempo = distância ÷ velocidade
Conceitos:
Variáveis (distância, velocidade, tempo)
Operadores (divisão)
Funções (fazer o cálculo)
*/

function TempoViagem(s, vm) {
    var tempo = s / vm
    return tempo
}

console.log(TempoViagem(80, 160) + ' hora')