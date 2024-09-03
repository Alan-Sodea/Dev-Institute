function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Example usage
const person = { name: 'Alice', age: 25 };
const address = { city: 'Wonderland', zipCode: 12345 };

const combined = combineObjects(person, address);
console.log(combined);
// Output: { name: 'Alice', age: 25, city: 'Wonderland', zipCode: 12345 }
