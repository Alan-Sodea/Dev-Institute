const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
          description: "Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser: {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach: {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  };
  
// 1. Convert the JS object into a JSON object:
const jsonString = JSON.stringify(marioGame);
console.log(jsonString);

// 2. Convert and pretty print the JS object into a JSON object:
const prettyJsonString = JSON.stringify(marioGame, null, 2);
console.log(prettyJsonString);