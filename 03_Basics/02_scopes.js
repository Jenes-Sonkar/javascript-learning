//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


 
addTwo(5) // casnnot access addTwo before initialization because it is a function expression and not a function declaration. Function declarations are hoisted to the top of their scope, which means that they can be called before they are defined in the code. On the other hand, function expressions are not hoisted, which means that they cannot be called before they are defined in the code. In this case, addTwo is a function expression, so it cannot be called before it is defined in the code. If we try to call addTwo before it is defined, we will get a ReferenceError saying that addTwo is not defined.
const addTwo = function(num){ // expression
    return num + 2
}
