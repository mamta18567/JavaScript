function myFunc()
{
    // return "a";
    // return [1,2,3];
    function hello()
    {
        console.log("hello World");
    }
    return hello;
    // return {fname:"Mamta",age:20}
}
const ans = myFunc();
ans();