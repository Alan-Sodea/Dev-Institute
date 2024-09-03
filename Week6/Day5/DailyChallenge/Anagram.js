function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const formatString = str => str.replace(/[^\w]/g, '').toLowerCase();
    
    // Format both strings
    const formattedStr1 = formatString(str1);
    const formattedStr2 = formatString(str2);
  
    // Compare the sorted characters of both strings
    return formattedStr1.split('').sort().join('') === formattedStr2.split('').sort().join('');
  }
  
  // Example usage:
  console.log(areAnagrams("Astronomer", "Moon starer")); // true
  console.log(areAnagrams("School master", "The classroom")); // true
  console.log(areAnagrams("The Morse Code", "Here come dots")); // true
  console.log(areAnagrams("Hello", "World")); // false
  