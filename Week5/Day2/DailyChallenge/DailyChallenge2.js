// Define the number of rows for the pattern
const numRows = 6;

// Initialize an empty string to hold the pattern
let pattern = '';

// Loop through each row
for (let i = 1; i <= numRows; i++) {
  // Add '*' characters for the current row
  pattern += '* '.repeat(i) + '\n';
}

// Print the pattern
console.log(pattern);
