// Function to check if all items in an array are strings and return uppercased array
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject('Some items in the array are not strings.');
      }
    });
  }
  
  // Function to sort an array of words and return it if the length is greater than 4
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        reject('Array length is not greater than 4.');
      }
    });
  }
  
  // Tests
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));
  