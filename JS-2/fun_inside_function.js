function app(){
    const myfunc=()=>{
        console.log("Hi from myfunc");
    }

    console.log("inside App");
    function add(n1,n2,n3)
    {
        return n1+n2+n3;
    }
    myfunc();
    console.log(add(2,3,5));
}
app();