// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// TO MY PM (ANGEL), I HAVE CHANGED THE ORDER OF THE PROBLEMS ON THIS LIST TO BETTER FIT TOGETHER.
// ALL PROBLEMS PERTAINING TO THE `ITEMS` ARRAY ARE SORTED WITH EACH OTHER
// ALL MATH PROBLEMS ARE SORTED WITH EACH OTHER

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
// HERE IS THE ARRAY FOR THE PROBLEMS AS WELL AS THE HOF
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function itemsHOF (arr, cb){
  return cb(arr);
}

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
// }
//Answer One
function itemsLength (arr) {
  return arr.length;
}

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
// }
// Answer Two
function lastItem (arr) {
  return arr.slice(-1);
}

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }
// Answer three
function itemsHOF2 (array, callback, item){
  return callback(array, item);
};
function checkItem(array, item) {
  return array.includes(item);
};

// END ITEMS ARRAY PROBLEMS HERE
// BEGIN MATH ARRAY PROBLEMS HERE

// HERE IS THE MATH HOF
function MathCalcuator(num1, num2, cb){
  return cb(num1, num2);
}
// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }
// Answer One
function sumMath(num1, num2) {
  return num1 + num2;
}

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }
// Answer Two
function proMath(num1, num2) {
  return num1 * num2;
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
