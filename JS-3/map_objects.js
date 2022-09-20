// Map is iterable.  
// store data in ordered manner
// stores key value pair
// duplicate keys are not allowed like objects.
// In objects we can have string or symbol as a key 
// whereas in maps we can have String, array, number as a key 

// const person = {
//     fname:"Mamta",
//     agge:20,
//     1:"one"
// }
// console.log(person.fname);
// console.log(person["1"]);
// for(let key in person)
// {
//     console.log(typeof key);
// }

// map stores key value pair 
// const person = new Map();
// person.set('fname',"Mamta");
// person.set('age',20);
// person.set(1,'one');
// console.log(person.get(1));
// // console.log(person.get(keys));
// for(let key of person.keys())
// {
//     console.log(key,typeof key)
// }

// for(let [key,value] of person)
// {
//     console.log(key,value);
// }

// const person = new Map([['fname','Mamta'],['age',7]]);
// console.log(person);

const person = {
    id:110,
    firstName:"mamta"
}
const user = new Map();
user.set(person,{age:20,gender:"Female"});
console.log(user);
console.log(person.id);
console.log(user.get(person).gender);
