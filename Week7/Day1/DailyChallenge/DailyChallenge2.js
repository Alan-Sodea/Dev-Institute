// 1ère fonction : Convertir le morse JSON en objet JavaScript
function toJs() {
    return new Promise((resolve, reject) => {
      // Le morse JSON est déjà fourni comme objet JavaScript
      const morseJS = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      };
  
      if (Object.keys(morseJS).length === 0) {
        reject('Morse object is empty');
      } else {
        resolve(morseJS);
      }
    });
  }
  
  // 2ème fonction : Convertir le texte utilisateur en code Morse
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or a sentence:').toLowerCase();
      const morseTranslation = [];
  
      for (const char of userInput) {
        if (morseJS[char] === undefined) {
          reject(`Character "${char}" not found in Morse object`);
          return;
        }
        morseTranslation.push(morseJS[char]);
      }
  
      resolve(morseTranslation);
    });
  }
  
  // 3ème fonction : Joindre les traductions Morse et les afficher sur la page
  function joinWords(morseTranslation) {
    const joined = morseTranslation.join('\n');
    document.body.innerText = joined;
  }
  
  // Chaînage des fonctions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
  