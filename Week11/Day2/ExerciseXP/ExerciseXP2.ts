// Base interface
interface Vehicle {
    make: string;
    model: string;
    start(): string;
}

// Extended interface
interface Car extends Vehicle {
    numberOfDoors: number;
}

// Class implementing the Car interface
class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }

    start(): string {
        return `The ${this.make} ${this.model} is starting.`;
    }
}

// Example usage
const myCar = new Sedan('Toyota', 'Camry', 4);
console.log(myCar.start()); // Output: The Toyota Camry is starting.
