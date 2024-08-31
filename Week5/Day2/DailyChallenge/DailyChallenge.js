// Define the sentence
let sentence = "The movie is not that bad, I like it";

// Find the first appearance of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace the substring "not...bad" with "good"
  let result = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + "bad".length);
  console.log(result);
} else {
  // Output the original sentence if conditions are not met
  console.log(sentence);
}