let m = process.argv.slice(2);
const pigLatin = () => {
  let s = "";
  let k = "";
  for (let i = 0; i <= m.length - 1; i++) {
    s = m[i].split("");
    k = s.shift();
    console.log(s.join("") + k + "ay");
  }

};
pigLatin();