const input = process.argv[2];
const obfuscate = (input) => {
  let newString = "";
  for (let i = 0; i <= input.length - 1; i++) {
    // newString += char === 'a'? '4': char;
    if (input[i] === "a") {
      newString += "4";

      // continue;
    } else if (input[i] === "e") {
      newString += "3";
    } else if (input[i] === "o") {
      newString += "0";
    } else if (input[i] === "l") {
      newString += "1";
    } else {
      newString += input[i];
    }
  }

  return newString;
};
console.log(obfuscate(input));
