const numbers = [2,4,6,8];
function IsOdd(number)
{
    return number%2!==0;
}
const ans = numbers.some(IsOdd);
console.log(ans);

const ans1 = numbers.some((number)=>
{
    return number%2!==0;
});
console.log(ans1);
//some checks for even one item satisfying a condition.
const userCart = [
    {productid:1,productName:"Washing Machine",price:29000},
    {productid:2,productName:"Microwave",price:10000},
    {productid:3,productName:"Geezer",price:12000},
    {productid:4,productName:"AC",price:12000}
]
const new_ans = userCart.some((cartItem)=>
{
    return cartItem.productName[0]=="B";
})
console.log(new_ans);