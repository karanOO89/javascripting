const nameInverter = function (name) {
  if (name === undefined) {
    return 'Error';
  }
  const s = name.split(" ");
  let y = s.filter((x) => x !== "");
  let z = s.filter((x) => x === "Dr.");
  //   console.log(z);

  if (y.length === 0) {
    return "";
  }
  if (y[y.length - 1] === "Dr.") {
    return "";
  }
  if (z.length > 0 && y.length === 2) {
    return `${z[0]} ${y[y.length - 1]}`;
  }
  if (z.length > 0 && y.length === 3) {
    //   console.log(y)
    return `${z[0]} ${y.splice(1, 2).reverse().join(", ")}`;
  }
  if (y[0] === "Dr." && y.length > 2) {
    return `${y[0]} ${y[y.length - 1]}`;
  }
  if (y.length === 1) {
    const nameNoSpaces = y.join("");
    return nameNoSpaces;
  }
  if (y.length > 1) {
    const nameNoSpaces = y.reverse().join(", ");
    return nameNoSpaces;
  }

  //    return s.join("");
};
console.log(nameInverter());

module.exports = nameInverter;
