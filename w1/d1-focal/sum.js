const args = process.argv;
let newArgs = [];
newArgs = args.slice(2);
newArgs = newArgs.map(Number);
let sum = 0;
for (let i = 0; i < newArgs.length; i++) {
  sum += newArgs[i];
}
console.log(sum);