// tupleTypes.ts
function getDetails(name: string, age: number): [string, number, string] {
    let message = `Hello, ${name}. You are ${age} years old.`;
    return [name, age, message];
}

const [name, age, message] = getDetails("Alice", 30);
console.log(message);  // Hello, Alice. You are 30 years old.
