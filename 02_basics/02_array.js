const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // The spread operator (...) allows you to expand an iterable (like an array) into individual elements. In this case, it takes all the elements from marvel_heros and dc_heros and combines them into a new array called all_new_heros. This does not modify the original arrays.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By passing Infinity as the argument, it will flatten the array to any depth, effectively removing all nested arrays and returning a single-level array.
console.log(real_another_array);



console.log(Array.isArray("Jenes"))// The Array.isArray() method checks if the provided value is an array. It returns true if the value is an array, and false otherwise.
console.log(Array.from("Jenes"))// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from({name: "Jenes"})) // The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, the object {name: "Jenes"} is not an array-like or iterable object, so it will return an empty array [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));