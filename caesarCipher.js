function caesarCipher(string, shift) {
  string = string.toLowerCase();
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringLetters = string.split("");
  let encryptedString = stringLetters.map((char) => {
    // Check if character is in alphabet
    if (alphabet.includes(char)) {
      // Get current index of the character in the alphabet
      let currentIndex = alphabet.indexOf(char);
      let newIndex = (currentIndex + shift) % 26;
      return alphabet[newIndex];
    } else {
      return char;
    }
  });
  return encryptedString.join("");
}

module.exports = caesarCipher;
