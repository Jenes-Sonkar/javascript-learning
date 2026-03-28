const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { // for in loop is used to iterate over the keys of an object
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { 
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// for in loop is used to iterate over the keys of an object, but it can also be used to iterate over the keys of an array. However, it is not recommended to use for in loop to iterate over an array because it will also iterate over the inherited properties of the array, which can lead to unexpected results. It is better to use for of loop or forEach method to iterate over an array.
// for of loop is used to iterate over the values of an iterable object, such as an array, string, or map. It does not iterate over the inherited properties of the object, which makes it a better choice for iterating over arrays and maps.