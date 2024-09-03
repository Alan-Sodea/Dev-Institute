class Stack<T> {
    private items: T[] = [];

    // Push method to add an element to the stack
    public push(element: T): void {
        this.items.push(element);
    }

    // Pop method to remove the top element from the stack
    public pop(): T | undefined {
        return this.items.pop();
    }

    // Method to check if the stack is empty
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Example usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
