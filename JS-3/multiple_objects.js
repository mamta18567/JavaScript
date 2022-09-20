// const user = {
//     fname:"Mamta",
//     lastName:"Arora",
//     email:"mamtaroraksh@gmail.com",
//     age:20,
//     address:"S.B.L.S Nagar, Jalandhar",
//     about:function(){
//         return `${this.fname} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// const user_methods = {
//     about : function(){
//         return `${this.fname} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }
function createUser(fname,lname,email,age,address)
{
    const user=Object.create(createUser.prototype);
    user.fname = fname;
    user.lname = lname;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = user_methods.about;
    // user.is18 = user_methods.is18;
    return user;
}
createUser.prototype.about = function(){
    return `${this.fname} is ${this.age} years old`;
}
createUser.prototype.is18 = function(){
    return this.age>=18;    
}
const user1 = createUser('Mamta','Arora','mamtaroraksh@gmail.com',20,'s.b.l.s nagar');
// console.log(user_methods.is18());
console.log(user1);
console.log(user1.is18());
