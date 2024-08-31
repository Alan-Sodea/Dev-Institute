const family = {
    father: "John",
    mother: "Jane",
    brother: "Jake",
    sister: "Jill",
  };
  
  // Using a for-in loop to console.log the keys
  for (const key in family) {
    console.log(key);
  }
  
  // Using a for-in loop to console.log the values
  for (const key in family) {
    console.log(family[key]);
  }