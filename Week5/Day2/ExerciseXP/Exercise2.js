const colors = ["blue", "red", "green", "yellow", "purple"];

// Loop through the array and console.log each color with a suffix
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: Use suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  const suffix = suffixes[i] || "th";
  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}
