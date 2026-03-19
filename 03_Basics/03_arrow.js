const user = {
    username: "jenes",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jenes"
//     console.log(this.username);
// }

// chai()

// const chai  = function () {
//     let username = "jenes"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "jenes"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jenes"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


function myFunc(num) {
    return num * 2
}


console.log(myFunc(5))
