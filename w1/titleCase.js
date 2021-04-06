const titleCase = (str) => {
  if (str === undefined || str.length === 0) return undefined;
  let arr = str.toLowerCase().split(" ");
  let newStr = [];
  let firstEle = "";
   for (let ele in arr) {
    firstEle = arr[ele].split("").shift().toUpperCase();
    newStr.push(firstEle + arr[ele].split("").splice(1).join(""));
  }

  return newStr.join(" ");
};
console.log(titleCase("this is an example"));
