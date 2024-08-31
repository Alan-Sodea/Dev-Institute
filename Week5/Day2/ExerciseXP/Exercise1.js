const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
// Remove “Greg” from the people array
people.shift(); // or people.splice(0, 1);

// Replace “James” with “Jason”
const indexOfJames = people.indexOf("James");
if (indexOfJames !== -1) {
  people[indexOfJames] = "Jason";
}

// Add your name to the end of the people array
people.push("Yourname");

// Console.log Mary’s index
console.log(people.indexOf("Mary"));

// Make a copy of the people array excluding “Mary” and your name
const copy = people.slice(0, people.indexOf("Mary")).concat(people.slice(people.indexOf("Mary") + 1, -1));

// Get the index of “Foo”
console.log(people.indexOf("Foo")); // Returns -1 because "Foo" is not in the array

// Get the last element of the array
const last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Iterate through the people array and console.log each person
for (const person of people) {
  console.log(person);
}

// Iterate through the people array and exit the loop after you console.log “Devon”
for (const person of people) {
  console.log(person);
  if (person === "Devon") break;
}
