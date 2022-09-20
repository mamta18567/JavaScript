function hello(){
    console.log("Hello!! How are you?");
}
console.log(hello.name);// to check the name of a function
// In javascript, a function is a combination of function and object. We can use function as an object also in javascript and we can add our own properties to a function as of object.
hello.myproperty = "unique";
console.log(hello.myproperty);
console.log(hello.prototype);