// array
// Arrays are a data structure that can hold multiple values. They are ordered, mutable, and can contain duplicate values. In JavaScript, arrays are objects and have various methods to manipulate them.
// Array makes a shallow copy of the original array and returns the new array. It does not modify the original array. The slice method takes two arguments: the starting index (inclusive) and the ending index (exclusive). If the ending index is not provided, it will slice until the end of the array.
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) Add an element to the beginning of the array and returns the new length of the array. It modifies the original array.
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // The join method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. It does not modify the original array.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements. The first argument is the starting index, the second argument is the number of elements to remove, and the optional third argument(s) are the elements to add.
console.log("C ", myArr);
console.log(myn2);
