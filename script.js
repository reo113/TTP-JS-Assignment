////////for each function///////

// function squares(value, index, arr) {
//   arr[index] = value * value;
// }
// function foreach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }
// const arr = [5, 4, 2, 1, 3];
// console.log(arr);
// foreach(arr, squares);
// console.log(arr);

// ////////////////////////////////

// function add(value, i, arr) {
//   arr[i] = value + value;
// }
// function myMap(arr, callback) {
//   const arrCopy = [];
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arrCopy);
//   }
//   return arrCopy;
// }
// const arr2 = [5, 4, 2, 1, 3];
// console.log(arr2);
// const newArr = myMap(arr2, add);
// console.log(arr2);
// console.log(newArr);

//////////////////////////////////

// function isBigEnough(value, index, arr) {
//   return value > 3;
// }

// function MyFilter(arr, callback) {
//   const arrcopy = [];
//   let idx = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       arrcopy[idx] = arr[i];
//       idx++;
//     }
//   }
//   return arrcopy;
// }
// const arr3 = [5, 4, 2, 1, 3];
// const newArrr = MyFilter(arr3, isBigEnough);
// console.log(newArrr);

///////////////////////////////////////

// function mySome(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return true;
//     }
//   }
//   return false;
// }
// const arr4 = [5, 4, 2, 1, 3];
// const result = mySome(arr4, isBigEnough);
// console.log(result);

// //////////////////////////////////////////

// function myEvery(arr,callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// const arr5 = [5, 4, 2, 1, 3];
// const res = myEvery(arr5,isBigEnough);
// console.log(res);

// /////////////////////////////////////

// function accum(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue;
// }

// function myReduce(arr,callback) {
//   let accumulator = 0;
//   for (let i = 0; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i], i, arr);
//   }
//   return accumulator;
// }
// const arr6 = [5, 4, 2, 1, 3];

// const sum = myReduce(arr6,accum);
// console.log(sum);

/////////////////////////////////
// function myInclude(pets, value) {
//   for (let i = 0; i < pets.length; i++) {
//     if (pets[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// const pets = ['cat', 'dog', 'bat'];
// const ret = myInclude(pets, 'ew');
// console.log(ret);

////////////////////////////////////

// function myIndexOf(pets, value) {
//   for (let i = 0; i < pets.length; i++) {
//     if (pets[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// const ret2 = myIndexOf(beasts, 'bison');
// console.log(ret2);

///////////////////////////////////////

// function myPush(animals, value) {
//   animals[animals.length] = value;
//   return animals.length;
// }

// const animals = ['pigs', 'goats', 'sheep'];
// const ret3 = myPush(animals, 'cows');
// console.log(ret3);

//////////////////////////////////////

// function myUnshift(animal, value) {
//   for (let i = animal.length; i >= 0; i--) {
//     if (animal[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// const animal = ["Tiger", "Dodo", "Penguin", "Dodo"];
// const ret4 = myUnshift(animal, "Tiger");
// console.log(ret4);

//////////////////////////////////////
// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };
// function grabKeys(object1) {
//   const arr = [];
//   let idx = 0;
//   for (let key in object1) {
//     arr[idx++] = key;
//   }
//   return arr;
// }

// const keys = grabKeys(object1);
// console.log(keys);

////////////////////////////////////////

// function grabValues(object1) {
//   const arr = [];
//   let idx = 0;
//   for (let key in object1) {
//     arr[idx++] = object1[key];
//   }
//   return arr;
// }

// const val = grabValues(object1);
// console.log(val);

/////////////////////////////////

function range(start, end) {
  const arr = [];
  let idx = 0;
  while (start <= end) {
    arr[idx++] = start++;
  }
  return arr;
}
//  const rangeRes = range(1,4);
//  console.log(rangeRes);

/////////////////////////////

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// const sums = sum(range(1, 10));
// console.log(sums);

/////////////////////////////////

// function reverseArray(arr) {
//   const revArr = [];
//   let idx = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArr[idx++] = arr[i];
//   }
//   console.log(revArr);
// }
// reverseArray(range(1, 10));

/////////////////////////////

// function reverseInPlace(arr, start, end) {
//   while (start < end) {
//     [arr[end], arr[start]] = [arr[start], arr[end]];
//     start++;
//     end--;
//   }
// }
// const arr = [1,2,3,4,5];
// console.log(arr);
// reverseInPlace(arr, 0, arr.length - 1);
// console.log(arr);

//////////////////////////////
// 1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] != 0) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
        break;
      }
    }
  }
}

const a = [0, 1, 0, 3, 12];
moveZeros(a);
console.log(a);
// Output: [1,3,12,0,0]

// Note:

// You must do this in-place without making a copy of the array.
