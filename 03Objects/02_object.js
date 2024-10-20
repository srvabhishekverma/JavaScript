//const tinderUser={} non singletons object
const tinderUser=new Object() // singleton  objects 
console.log(tinderUser);

tinderUser.id="1234abc"
tinderUser.name="Abhishek"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

// objects
const regularUser={
    email:"abhishek@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Abhishek",
            lastname:"Verma"
        }
    }
}

//console.log(regularUser.fullname);



const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({}, obj1, obj2)
const obj3={...obj1, ...obj2}
//console.log(obj3);



//data base se value kasie aati hai 

const users=[
{
    id:1,
    email: "abhishek"
},
{
    id:1,
    email: "abhishek"
},
{
    id:1,
    email: "abhishek"
},
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// obects destructing 

const course={
    coursename:"js in hindi ",
    price:"999",
    courseInstructor:"Abhishek"
}
// course.courseInstructor
const {courseInstructor:Instructor}=course
// console.log(courseInstructor);
console.log(Instructor);


// JSON API calls
// {
//     "name":"abhishek",
//     "cousename":"abhishek",
//     "price":"999"
// }


// Arrays of formatted API
[
    {},
    {},
    {}
]
