// Empty(""),undefined,null,0,false values are known as falsy values
let age = 113;
if(age>18)
{
    console.log("Go");
}
else{
    console.log("Stop");
}

let myname = "abc";
if(myname)
{
    console.log(myname);
}
else
{
    console.log("Enter your name first!");
}
//ternary operator
let umar = 70;
let drink = (umar>10) ? "coffee" : "Milk";
console.log(drink);