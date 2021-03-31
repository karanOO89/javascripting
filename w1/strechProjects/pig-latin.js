let m = process.argv.slice(2);
const pigLatin = () => {
  let s = "";
  let k = "";
  let dummyArr=[];
  for (let i = 0; i <= m.length - 1; i++) {
    s = m[i].split("");
    k = s.shift();
    dummyArr.push(s.join("") + k + "ay");

  }
return(dummyArr.join(' '))
};
console.log(pigLatin());