class Person {
    // Private properties
    private firstName: string;
    private lastName: string;

    // Public property
    public age: number;

    // Protected property
    protected address: string;

    // Constructor to initialize the properties
    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    // Method to get full name
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Example usage
const person = new Person('John', 'Doe', 30, '123 Main St');
console.log(person.getFullName()); // Output: John Doe
console.log(person.age); // Output: 30
