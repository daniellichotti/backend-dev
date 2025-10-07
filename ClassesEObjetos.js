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

console.clear()