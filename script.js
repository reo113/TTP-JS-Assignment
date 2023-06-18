////////for each function///////

function squares(value, index, arr) {
  arr[index] = value * value;
}
function foreach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
const arr0 = [5, 4, 2, 1, 3];
console.log(arr0);
foreach(arr0, squares);
console.log(arr0);

// /////////MAp/////////////////

function add(value, i, arr) {
  arr[i] = value + value;
}
function myMap(arr, callback) {
  const arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arrCopy);
  }
  return arrCopy;
}
const arr2 = [5, 4, 2, 1, 3];
console.log(arr2);
const newArr = myMap(arr2, add);
console.log(arr2);
console.log(newArr);

///////////●	Filter////////////////

function isBigEnough(value, index, arr) {
  return value > 3;
}

function MyFilter(arr, callback) {
  const arrcopy = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      arrcopy[idx] = arr[i];
      idx++;
    }
  }
  return arrcopy;
}
const arr3 = [5, 4, 2, 1, 3];
const newArrr = MyFilter(arr3, isBigEnough);
console.log(newArrr);

///////////////●	Some ////////////////////////

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
const arr4 = [5, 4, 2, 1, 3];
const result = mySome(arr4, isBigEnough);
console.log(result);

// ////////////●	Every//////////////////////////////

function myEvery(arr,callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
const arr5 = [5, 4, 2, 1, 3];
const res = myEvery(arr5,isBigEnough);
console.log(res);

// /////////////////●	Reduce////////////////////

function accum(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}

function myReduce(arr,callback) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
const arr6 = [5, 4, 2, 1, 3];

const sumss = myReduce(arr6,accum);
console.log(sumss);

//////////////●	Includes///////////////////
function myInclude(pets, value) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i] === value) {
      return true;
    }
  }
  return false;
}

const pets = ['cat', 'dog', 'bat'];
const ret = myInclude(pets, 'ew');
console.log(ret);

////////////////●	indexOf////////////////////

function myIndexOf(pets, value) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i] === value) {
      return i;
    }
  }
  return -1;
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
const ret2 = myIndexOf(beasts, 'bison');
console.log(ret2);

/////////////////●	Push//////////////////////

function myPush(animals, value) {
  animals[animals.length] = value;
  return animals.length;
}

const animals = ['pigs', 'goats', 'sheep'];
const ret3 = myPush(animals, 'cows');
console.log(ret3);

/////////////●	lastIndexOf/////////////////////////

function myUnshift(animal, value) {
  for (let i = animal.length; i >= 0; i--) {
    if (animal[i] === value) {
      return i;
    }
  }
  return -1;
}

const animal = ["Tiger", "Dodo", "Penguin", "Dodo"];
const ret4 = myUnshift(animal, "Tiger");
console.log(ret4);

/////////////////●	Object.keys()/////////////////////
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};
function grabKeys(object1) {
  const arr = [];
  let idx = 0;
  for (let key in object1) {
    arr[idx++] = key;
  }
  return arr;
}

const keys = grabKeys(object1);
console.log(keys);

/////////////●	Object.values()/////////////////////////

function grabValues(object1) {
  const arr = [];
  let idx = 0;
  for (let key in object1) {
    arr[idx++] = object1[key];
  }
  return arr;
}

const val = grabValues(object1);
console.log(val);

/////////////Sum of range////////////////////

function range(start, end) {
  const arr = [];
  let idx = 0;
  while (start <= end) {
    arr[idx++] = start++;
  }
  return arr;
}
 const rangeRes = range(1,4);
 console.log(rangeRes);

//////////sum///////////////////

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
const sums = sum(range(1, 10));
console.log(sums);

///////////reverse array//////////////////////

function reverseArray(arr) {
  const revArr = [];
  let idx = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr[idx++] = arr[i];
  }
  return revArr;
}
reverseArray(range(1, 10));

/////////in place reverse////////////////////

function reverseInPlace(arr, start, end) {
  while (start < end) {
    [arr[end], arr[start]] = [arr[start], arr[end]];
    start++;
    end--;
  }
}
const arr = [1,2,3,4,5];
console.log(arr);
reverseInPlace(arr, 0, arr.length - 1);
console.log(arr);

//////////////A-list////////////////

function arrayToList(arr) {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], next: list };
  }
  return list;
}
function listToArray(list) {
  const arr = [];
  let idx = 0;
  while (list) {
    arr[idx++] = list.value;
    list = list.next;
  }
  return arr;
}
function prepend(value, list) {
  return { value, next: list };
}
function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.next, n - 1);
  }
}
const tab = [1, 2, 3];
const newT = arrayToList(tab);
console.log(prepend(0, newT));

console.log(nth(newT, 1));

///////////////Deep Comparision//////////////////////////////////

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    obj1 == null ||
    typeof obj1 != "object" ||
    obj2 == null ||
    typeof obj2 != "object"
  ) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

//   -Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
//   -Also write a listToArray function that produces an array from a list.

//   -Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,

//   -nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or
//   undefined when there is no such element.

/////////////////////
// 1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] != 0) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
        break;
      }
    }
  }
}

const a = [1, 0, 0];
moveZeros(a);
console.log(a);
Output: [1,3,12,0,0]

// Note:

// You must do this in-place without making a copy of the array.
