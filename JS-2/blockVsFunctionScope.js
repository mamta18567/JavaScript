// let and const are block scope
// var is function scope
// we cannot access let and const outside a block.
// {
//     const firstname = "Mamta";
//     console.log(firstname);
// }
// console.log(firstname);

function myApp()
{
    if(true)
    {
        var firstname = "mamta";
        console.log(firstname);
    }
    if(true)
    {
        console.log(firstname);
    }
}
myApp();
console.log(firstname);