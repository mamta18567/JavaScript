// Arrays are good but not sufficient for real world data. These are reference type like array.Unlike arrays these store data in the form of key value pairs.And also Objects don't have index.

// 1.how to create objects:-
// we use [] for array but {} for creating an object.
// const person = {name:"Mamta",age:20} //object is made(also known as Object literal)
const person = {
    name:"Mamta",
    age:20,
    hobbies:["listening music","sleeping","travelling"],
    gender:"female"
}
// console.log(person);

// 2.how to access data from objects:-
// (object.property)
console.log(person.name);
console.log(person.age);
// console.log(person.hobbies);
console.log(person.gender);

// this method is used when we have to take value of key and insert it into an another object.
const key = "email"
console.log(person[key]="mamtaroraksh@gmail.com")

// 3.how to add key value pairs to objects:-
// object.property="value";
person.salary = "1 Lakh"
console.log(person);

// we can also use [" "] instead of . 
// this is known as bracket notation and dot notation.