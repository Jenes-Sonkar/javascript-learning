// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jenes",
            lastname: "Sonkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)// this will merge obj1, obj2 and obj4 into a new object. The first argument is the target object, which is an empty object in this case. The rest of the arguments are the source objects, which are obj1, obj2 and obj4 in this case. The properties of the source objects will be copied to the target object. If there are any properties with the same name, the value from the last source object will be used.

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [ // Array of objects
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1 ,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// returns an array of the keys of the object. This can be useful when we want to iterate over the keys of the object or when we want to check if a certain key exists in the object. The order of the keys in the array is not guaranteed to be the same as the order of the keys in the object.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jenes"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Jenes",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

const cours = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jenes"
}


const { coursename:name} = cours // this is called destructuring. It allows us to extract values from objects and assign them to variables. The syntax is { propertyName: variableName } = object. In this case, we are extracting the value of the property "coursename" from the object "cours" and assigning it to a new variable called "name". The original variable "coursename" will not be created in this case, only the new variable "name" will be created and assigned the value of "js in hindi".
console.log(name); 