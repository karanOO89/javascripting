const assertEqual= require('.w1/lotide/');
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`);
    } else {
      console.assert(actual === expected, `🛑🛑🛑 ${actual} !== ${expected}`);
    }
  };
 
function largestNumber(array) {
    return array.reduce((previousValue, currentValue) => {  
      return Math.max(previousValue, currentValue);
    });
  }
  // Example of a test for that function
  const array = [1,2,3,4,5];
  const largest = largestNumber(array);
  assertEqual(largest, 5);