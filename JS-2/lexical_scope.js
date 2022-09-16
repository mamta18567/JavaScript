function myApp()
{
    const myVar = "value1";

    function myFunc()
    {
        const myVar = "Mamta";
        console.log("Inside myFunc block",myVar);
    }
    console.log(myVar);
    myFunc();
}
myApp();
