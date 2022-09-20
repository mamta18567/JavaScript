function hello(){
    console.log("Hello!! How are you?");
}
console.log(hello.name);// to check the name of a function
// In javascript, a function is a combination of function and object. We can use function as an object also in javascript and we can add our own properties to a function as of object.
hello.myproperty = "unique";
console.log(hello.myproperty);
console.log(hello.prototype);// returns an empty freespace which is nothing but an object---> {}

// only functions provide prototype property.
const hell = {key1:"Value1"};
if(hell.prototype){
    console.log("Yes! Prototype is present.");
}
else{
    console.log("Prototype is not present.");
}