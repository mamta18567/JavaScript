// function numbers(a,b,...c)
// {
//     console.log(`Value of a is ${a}`);
//     console.log(`Value of b is ${b}`);
//     console.log(`Value of c is`,c);
// }
// numbers(2,3,4,5,6,7,8);
// In order to have all the rest elements in an array we need to use spread operator.

function myfunc(...numbers)
{
    console.log(numbers);
    let sum = 0;
    for(let number of numbers)
    {
        sum = sum + number;
    }
    return sum;
}
const ans = myfunc(1,2,3,4,5,6,7,8);
console.log(ans);
