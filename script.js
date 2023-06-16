////////for each function///////

function squares(value, index, arr) {
  arr[index] = value * value;
}
function foreach(arr, squares) {
  for (let i = 0; i < arr.length; i++) {
    squares(arr[i], i, arr);
  }
}
const arr = [5, 4, 2, 1, 3];
//console.log(arr);
foreach(arr, squares);
//console.log(arr);

// ////////////////////////////////

// function add(value, i, arr) {
//   arr[i] = value + value;
// }
// function myMap(arr, add) {
//   const arrCopy = [];
//   for (let i = 0; i < arr.length; i++) {
//     add(arr[i], i, arrCopy);
//   }
//   return arrCopy;
// }
// const arr2 = [5, 4, 2, 1, 3];
// console.log(arr2);
// const newArr = myMap(arr2, add);
// console.log(arr2);
// console.log(newArr);

//////////////////////////////////
function isBigEnough(value, index, arr) {
  return value > 3;
}
function MyFilter(arr, isBigEnough) {
  const arrcopy = arr;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isBigEnough(arr[i], i, arr)) {
      arrcopy[idx] = arr[i];
      idx++;
    }
  }
  return arrcopy;
}
const arr3 = [5, 4, 2, 1, 3];
const newArrr = MyFilter(arr3, isBigEnough);
console.log(newArrr);

///////////////////////////////////////

// function mySome(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (isBigEnough(arr[i], i, arr)) {
//       return true;
//     }
//   }
//   return false;
// }
// const arr4 = [5, 4, 2, 1, 3];
// const result = mySome(arr4);
// console.log(result);

// //////////////////////////////////////////

// function myEvery(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (isBigEnough(arr[i])) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// const arr5 = [5, 4, 2, 1, 3];
// const res = myEvery(arr5);
// console.log(res);

// /////////////////////////////////////

// function accumulator(){

// }
// function myReduce(arr,accumulator){

//   let sum = 0;
// for(let x in arr){


// }
// }
// const arr6 = [5, 4, 2, 1, 3];