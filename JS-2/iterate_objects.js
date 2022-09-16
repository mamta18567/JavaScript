// There are 2 methods to iterate objects.
// 1.for in loop
const person = {
    name:"Mamta",
    age:20,
    hobbies:["listening music","sleeping","travelling"],
    gender:"female"
}
// for (let key in person)
// {   
//     console.log(key)
//     console.log(person[key]);
// }

// for(let key in person)
// {
//     console.log(`${key}:${person[key]}`);
// }
// 2.Object.keys
// console.log(Object.keys(person));
for(let key of Object.keys(person))
{
    console.log(person[key]);
}