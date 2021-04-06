const swapper = function (key1, object1, key2, object2) {
  const ks1 = Object.keys(object1);
  const ks2 = Object.keys(object2);
  let newKey = 0;

  if (ks1 > ks2 || ks1 === ks2) {
    newKey = ks1;
  } else {
    newKey = ks2;
  }

  let val1;
  let val2;
  for (let k1 of newKey) {
    if (k1 === key1) {
      val1 = object1[k1];
      val2 = object2[key2];

      object1[key1] = val2;
      object2[key2] = val1;

      break;
    }
  }
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
