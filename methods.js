const arr = [1, 2, 3, 4, 5, 6, 1];
const obj = {
  a: "string",
  b: 30,
  c: true,
  e: "something",
};

// Each //
Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};
console.log("myEach: ");
arr.myEach((x, i, arr) => console.log(arr));
console.log("forEach: ");
arr.forEach((x, i, arr) => console.log(arr));

// MAP //
Array.prototype.myMap = function (callBackFn) {
  const nArr = [];
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    if (this[i] === undefined) continue;
    nArr[i] = callBackFn(this[i], i, this);
  }
  return nArr;
};
const map2 = arr.myMap((x) => x * 3);
const map1 = arr.map((x) => x * 3);
console.log("myMap:");
console.log(map2);
console.log("map: ");
console.log(map1);
// FILTER //
Array.prototype.myFilter = function (callBackFn) {
  const nArr = [];
  let j = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callBackFn(this[i])) {
      nArr[j] = this[i];
      j++;
    }
  }
  return nArr;
};
const myResult = arr.myFilter((n) => n > 3);
const result = arr.filter((n) => n > 3);
console.log("filter: ");
console.log(result);
console.log("myFilter: ");
console.log(myResult);
// SOME //
Array.prototype.mySome = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn(this[i])) {
      return true;
    }
  }
  return false;
};
const even1 = arr.mySome((element) => element > 5);
console.log("mySome: ");
console.log(even1);
const even = arr.some((element) => element > 5);
console.log("some: ");
console.log(even);
// EVERY //
Array.prototype.myEvery = function (callBackFn) {
  let checker = false;
  for (let i = 0; i < this.length; i++) {
    if (callBackFn(this[i])) checker = true;
    else checker = false;
  }
  return checker;
};
const checkMyEvery = arr.myEvery((current) => current > 5);
console.log("myEvery: ");
console.log(checkMyEvery);

const checkEvery = arr.every((current) => current > 5);
console.log("every: ");
console.log(checkEvery);
// REDUCE //
Array.prototype.myReduce = function (callbackFn, possible_value = 0) {
  let sum = possible_value;
  for (let i = 0; i < this.length; i += 2) {
    if (this.length % 2 !== 0 && i === this.length - 1) {
      if ((i = this.length - 1)) {
        sum += callbackFn(this[i], 0);
      }
    } else {
      sum += callbackFn(this[i], this[i + 1]);
    }
  }
  return sum;
};

const reducer = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  7
);
const my_reducer = arr.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  7
);
console.log("reduce: ");
console.log(reducer);
console.log("myReduce: ");
console.log(my_reducer);
// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (searchElement === this[i]) {
      return true;
    }
  }
  return false;
};
console.log("myIncludes: ");
console.log(arr.myIncludes(1));
console.log("includes: ");
console.log(arr.includes(1));
// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
console.log("myIndexOf: ");
console.log(arr.myIndexOf(5, 5));
console.log("indexOf: ");
console.log(arr.indexOf(5, 5));
// PUSH //
Array.prototype.myPush = function (...args) {
  let arg_i = 0;
  let length = this.length;
  for (let i = length; i < length + args.length; i++) {
    this[i] = args[arg_i];
    arg_i++;
  }
  return this.length;
};
arr.myPush(10, 20);
arr.push(100, 200);
console.log("myPush and push: ");
console.log(arr);
// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, fromIndex = 0) {
  for (let i = this.length - 1; i >= fromIndex; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
console.log("myLastIndexOf: ");
console.log(arr.myLastIndexOf(100));
console.log("lastIndexOf: ");
console.log(arr.lastIndexOf(100));
// KEYS //

Object.grabKeys = function (obj) {
  const arr = [];
  for (const key in obj) {
    arr.push(key);
  }
  return arr;
};
console.log("grabKeys: ");
console.log(Object.grabKeys(obj));
console.log("keys: ");
console.log(Object.keys(obj));
// VALUES //
Object.grabValues = function (obj) {
  const arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};
console.log("grabValues: ");
console.log(Object.grabValues(obj));
console.log("values: ");
console.log(Object.values(obj));
