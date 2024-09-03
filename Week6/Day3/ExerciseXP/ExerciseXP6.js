// [2] === [2] False
// {} === {} False

// Values of numbers
// 4
// 4
// 5

// Définition de la classe Animal
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Définition de la classe Mammal qui hérite de Animal
class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// Création de l'objet farmerCow qui est une instance de la classe Mammal
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');

// Appel de la méthode sound() avec le son "Moooo"
console.log(farmerCow.sound('Moooo'));
