const numbers = [2,4,6,1,10];
// function Iseven(number)
// {
//     return number%2==0;
// }
// const ans = numbers.every(Iseven);
// console.log(ans);

//using arrow function - 
// const ans1 = numbers.every((number)=>
// {
//     return number%2==0;
// });
// console.log(ans1);

const userCart = [
    {productid:1,productName:"Washing Machine",price:29000},
    {productid:2,productName:"Microwave",price:10000},
    {productid:3,productName:"Geezer",price:12000},
    {productid:4,productName:"AC",price:12000}
]
const ans = userCart.every((cartItem)=>
{
   return cartItem.price<30000;
});
console.log(ans);