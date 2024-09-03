// typeGuard.ts

function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === 'number') {
        // If the input is a number, return its square
        return input * input;
    } else if (typeof input === 'string') {
        // If the input is a string, return the uppercase version of the string
        return input.toUpperCase();
    } else if (typeof input === 'boolean') {
        // If the input is a boolean, return the negated value
        return !input;
    }
}

// Example usage
console.log(processInput(5));          // 25 (5 squared)
console.log(processInput("hello"));    // "HELLO" (uppercase string)
console.log(processInput(true));       // false (negated boolean)
