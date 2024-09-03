// objectTypeAnnotations.ts
interface Person {
    name: string;
    age: number;
}

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person = createPerson("Alice", 30);
console.log(person);  // { name: 'Alice', age: 30 }
