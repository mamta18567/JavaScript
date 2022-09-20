// const person = {
//     fname:"Mamta",
//     age:20,
//     about:function(){
//         // console.log(`person name is ${this.fname} and age is ${this.age}`);
//         console.log(this);
//     }
// }
// person.about();----> correct
// person.about-----> wrong
// person.about();
// If we pass this keyword inside a function then the function returns the object otherwise it return the inside written sentence.

function personInfo(){
    console.log(`person name is ${this.fname} and age is ${this.age}`);
}
const person1 = {
    fname:"mamta",
    age:20,
    about:personInfo
}
const person2 = {
    fname:"Vanshika",
    age:21,
    about:personInfo
}
const person3 = {
    fname:"Ishita",
    age:22,
    about:personInfo
}
person2.about();
