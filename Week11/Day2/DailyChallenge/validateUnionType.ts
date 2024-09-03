function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

// Example usage
const value1: any = 42;
const value2: any = "Hello";
const value3: any = true;

const allowedTypes1 = ["number", "string"];
const allowedTypes2 = ["boolean", "object"];

console.log(validateUnionType(value1, allowedTypes1)); // Output: true
console.log(validateUnionType(value2, allowedTypes1)); // Output: true
console.log(validateUnionType(value3, allowedTypes1)); // Output: false

console.log(validateUnionType(value3, allowedTypes2)); // Output: true
console.log(validateUnionType(value1, allowedTypes2)); // Output: false
