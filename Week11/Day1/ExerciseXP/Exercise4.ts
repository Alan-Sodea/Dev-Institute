// controlFlow.ts
function checkNumber(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));  // Positive
console.log(checkNumber(-5));  // Negative
console.log(checkNumber(0));   // Zero
