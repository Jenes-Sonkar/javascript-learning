// console.log("J");
// console.log("e");
// console.log("n");
// console.log("e");
// console.log("s");


function sayMyName() {
    console.log("J");
    console.log("e");
    console.log("n");
    console.log("e");
    console.log("s");
}
sayMyName();



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("jenes"))


function calculateCartPrice(val1, val2, ...num1){// this is called rest parameter. It allows us to pass an arbitrary number of arguments to a function. The syntax is ...variableName. In this case, we are using the rest parameter to collect all the arguments passed to the function into an array called num1. The first two arguments will be assigned to val1 and val2 respectively, and the rest of the arguments will be collected into the num1 array.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "jenes",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
} 

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));