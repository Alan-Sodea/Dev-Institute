import persons from './data.js';

function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    return totalAge / persons.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`Average Age: ${averageAge}`);
