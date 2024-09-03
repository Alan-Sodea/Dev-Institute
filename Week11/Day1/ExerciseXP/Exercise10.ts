// functionOverloadingDefaultParams.ts
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, World!";
    }
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet());        // Hello, World!
