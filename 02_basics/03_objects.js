// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shreyansh",
    "full name": "Jenes Sonkar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "jenes@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) // when the key has space in between, we have to use bracket notation to access the value. Dot notation will not work in this case.
console.log(JsUser[mySym])

JsUser.email = "jenes@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "jenes@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // This keyword refers to the current object, which is JsUser in this case. So, this.name will give us the name property of the JsUser object.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());