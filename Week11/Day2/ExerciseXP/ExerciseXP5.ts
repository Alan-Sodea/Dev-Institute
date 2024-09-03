function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
    return arr.filter(predicate);
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const isEven = (num: number) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4]
