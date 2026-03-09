const name = "jenes"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// Sting interpolation

const gameName = new String('jenes-hc-com')// String is an object wrapper

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   jenes    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "github.com/Jenes-Sonkar"
console.log(newStringOne.replace('%20', '-'));

console.log(newStringOne.includes('sundar'));

console.log(gameName.split('-'));
console.log(url.includes('github'));
