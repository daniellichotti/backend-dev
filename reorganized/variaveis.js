/*
//declarar variavel

var nomeAluno = "Matheus"
var idadeAluno = 39

console.log(nomeAluno, idadeAluno)
console.log(typeof (idadeAluno + 1))
console.log(idadeAluno + 1)

//declarar variavel sem valor
var user
console.log(user)

//declarar uma variavel com um valor e dps reatribuí-lo
var password = '123456'
console.log(password)

password = 'J040&MoiSesinho'
console.log(password)

//js é case sensitive, ou seja, diferencia letras maiúsculas de minúsculas
var produto = 'arroz'
var Produto = 'feijao'

console.log(produto)
console.log(Produto)

//let só podemos declarar uma vez em cada escopo, se declarar denovo dará erro!
var usuario1
var usuario1

console.log(usuario1)

let usuario2 = 'hiorrane'
{
    let usuario2 = 'Matheuss'
}

console.log(usuario2) //ira mostrar Hiorrane pois está no escopo global

let number = 19
number = 40
console.log(number)

//podemos declarar uma constante
const constNumber = Math.PI

console.log(constNumber)

//hoisting - ele vai içar as declarações das variáveis sempre
console.log(users)
var users = 'Jão'

//nesse exemplo podemos ver que o var é acessado globalmente
let emailLetGlobal = 'jhondoeletGlobal@example.com'
var emailVarGlobal = 'jhondoevarGlobal@example.com'

{
    var emailVar = 'jhondoevar@example.com'
    let emailLet = 'jhondoelet@example.com'
}

{
    console.log(emailLetGlobal)
}

//bool
var hasCheckIn = 0
console.log(hasCheckIn)

//null
var nomeProfessor = null
console.log(typeof (nomeProfessor))

let firstName = 'Janilto'
let lastName = 'Oliveira'

//console.log(firstName, lastName)
//console.log(firstName + " " + lastName)
let message = 'Olá ' + firstName + ' ' + lastName + ', sua conta foi criada com sucesso!'
//console.log(message)
console.log(`Olá ${firstName} ${lastName}, sua conta foi criada com sucesso!`)

console.log('5' + 3) //faz uma concatenação e gera uma string
console.log('5' - 3) //força uma conversão para numero
console.log(true + 1) //2 pq true vira 1
console.log(false + 1) //1 pq false vira 0
console.log(null + 1) //1 pq null vira 0
console.log(undefined + 1) //NaN -> undefined não é convertido pra nada

// type casting
let pokemonHeightInInches = '39.3701'
let pokemonWeightInInches = 30
//console.log(Number(pokemonHeightInInches) + 1)
//console.log(String(pokemonWeightInInches))
console.log(parseInt(pokemonHeightInInches))
console.log(parseFloat(pokemonHeightInInches))
console.log(parseInt('10 anos'))
console.log(parseInt('anos 10'))
*/
console.log(parseInt('1010', 2)) //10
console.log(parseInt('FF', 16)) //255
console.log(parseInt('FF')) //erro comum, retorna NaN pq nao passamos a base

//nomes para variaveis
//camelcase
var userName

//snake_case
var user_name

//PODEMOS
var $email
var _outroEmail

//NÃO PODEMOS
//var 1email

