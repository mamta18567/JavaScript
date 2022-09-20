function myFunc(a)
{
    console.log(a)
    console.log('hello World');
}
// myFunc("abc");
function myFunc2(a,b)
{
    return a+b;
}
// let myNewFunc = myFunc2(5,4); simple function calling
myFunc(myFunc2(5,4));//callback function