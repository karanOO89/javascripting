let m = process.argv.slice(2);
const reverse = function() {
  for (let i = 0; i <= m.length - 1; i++) {
    let s = '';
    for (let j = m[i].length - 1; j >= 0; j--) {
      s += m[i][j];
    }
    console.log(s);
  }
};
reverse();