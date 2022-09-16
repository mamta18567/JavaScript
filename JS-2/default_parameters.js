function add(a,b=0)
{
    // if(b==undefined)
    // {
    //     b=0;
    // }
    return a+b;
}
const ans = add(4);
console.log(ans);
//default parameters are useful in case of undefined value. whenever we don't assign any value to variable we can use default parameters in such a case.