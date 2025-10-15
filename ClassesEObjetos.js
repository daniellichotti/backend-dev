class Person {
    constructor(name) {
        console.log('Olá', name, '!')
    }
}

const newPerson = new Person('Léo')

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    getPrice() {
        return `O ${this.name} custa R$${this.price}`
    }
}

const newProduct1 = new Product('Alvejante', '10.00')
const newProduct2 = new Product('Arroz', '11.00')
const newProduct3 = new Product('Feijão', '15.00')

console.log(newProduct3.getPrice())


//Herança
class Animal {
    constructor(specie) {
        this.specie = specie
    }

    makeSound() {
        console.log('Algum som')
    }
}

class Dog extends Animal {
    constructor(race, weight, size) {
        super('Cachorro')
        this.race = race
        this.weight = weight
        this.size = size
    }

    //Polimorfismo
    makeSound() {
        console.log('Au Au Au')
    }
}

class Cat extends Animal {
    constructor(race, weight, size) {
        super('Gato')
        this.race = race
        this.weight = weight
        this.size = size
    }

    makeSound() {
        console.log('Miau')
    }
}

const newAnimal = new Dog('Pastor Alemão', '20.0', 'Grande')
const newAnimal2 = new Cat('Siamês', '5.0', 'Pequeno')
newAnimal2.makeSound()


class Veiculo {
    constructor(tipo, ano, marca, modelo) {
        this.tipo = tipo
        this.ano = ano
        this.marca = marca
        this.modelo = modelo
    }

    makeSound() {
        console.log('Algum barulho de motor')
    }
}

class Carro extends Veiculo {
    constructor(ano, marca, modelo, motor, preco, cor) {
        super('Carro', ano, marca, modelo)
        this.motor = motor
        this.preco = preco
        this.cor = cor
    }

    makeSound() {
        console.log('Vrummm')
    }
}

class Aviao extends Veiculo {
    constructor(ano, marca, modelo, motor, precoPassagem, combustivel) {
        super('Aviao', ano, marca, modelo)
        this.motor = motor
        this.precoPassagem = precoPassagem
        this.combustivel = combustivel
    }

    makeSound() {
        console.log('Quack')
    }
}

const newCar = new Carro(1999, 'Pegeout', '308', '1.0', 600.00, 'Verde Limão')
const newPlane = new Aviao(1945, 'Embraer', 'Hercules', '1.2', 0, 'Querosene')
console.log('O', newPlane.marca, newPlane.modelo, 'usa', newPlane.combustivel)
console.log(newPlane)
newPlane.makeSound()

console.clear()

class User {
    #name
    #email
    #password

    constructor(name, email, password) {
        this.#name = name
        this.#email = email
        this.#password = password
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        if (newName.length <= 3) {
            console.log('O nome deve ser maior que 3 caracteres')
        } else {
            this.#name = newName
        }
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        if (!newEmail.includes("@")) {
            console.log('O email deve conter @')
        } else {
            this.#email = newEmail
        }
    }
}

const newUser = new User('Moisés', 'moiseszinho@hotmail.com', '123456')
newUser.email = 'leo'
console.log(newUser.email)