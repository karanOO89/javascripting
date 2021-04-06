console.log("");
const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let ele of cookie) {
    if (ele === "🍇") return "Raisin alert!";
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log("__________");

console.log("");
const raisinAlarmArray = function (cookies) {
  // Put your solution here
  let cookieArr = [];
  for (let ele of cookies) {
    if (ele.includes("🍇")) {
      cookieArr.push("Raisin alert!");
    } else {
      cookieArr.push("All good!");
    }
  }
  return cookieArr;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
console.log("");
