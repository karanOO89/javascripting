const diceNum = process.argv.slice(2).map(Number);
let randomNum = [];
let newNum = "";
for (let i = 0; i < diceNum; i++) {
  randomNum.push(Math.floor(Math.random(10) * 6) + 1);
  newNum += randomNum[i] + ", ";
}
console.log(`Rolled 3 dice: ${newNum}`);
