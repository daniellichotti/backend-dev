//Expressões e operadores aritiméticos
console.log('Soma: ', 2 + 168)
console.log('Concatenação: ', '2' + '168')
console.log('Subtração: ', 100 - 50)
console.log('Multiplicação: ', 2 * 50)
console.log('Multiplicação Decimal: ', 2 * 3.14)
console.log('Divisão: ', 20 / 5)
console.log('Divisão Decimal: ', 20.1 / 4.0)
console.log('Resto: ', 23 % 3)
console.log('Exponencial: ', 2 ** 3)

//incrementador
var numeroParaIncrementar = 0
numeroParaIncrementar++
// igual a numeroParaIncrementar = numeroParaIncrementar + 1

console.log(numeroParaIncrementar++) // 1
console.log(numeroParaIncrementar) // 2
console.log(++numeroParaIncrementar) //3
console.log(numeroParaIncrementar += 10) // igual a numeroParaIncrementar = numeroParaIncrementar + 10

console.clear()
//decrementador
numeroParaIncrementar = 0
numeroParaIncrementar--
console.log(numeroParaIncrementar) // -1
console.log(numeroParaIncrementar--) // -1
console.log(--numeroParaIncrementar) // -3
console.log(numeroParaIncrementar -= 10) // igual a numeroParaIncrementar = numeroParaIncrementar - 10