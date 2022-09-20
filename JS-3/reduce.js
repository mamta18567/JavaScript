const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((accumulator,currentValue)=>
{
    return accumulator + currentValue;
},100);
console.log(sum);
//reduce is used in real life while billing.

const shopping = [
    {userId:1, product:"TV",price:10000},
    {userId:2, product:"AC",price:20000},
    {userId:3, product:"WM",price:25000},
    {userId:4, product:"Micro",price:12000}
];
const sum_value = shopping.reduce((totalprice,current_price)=>
{
    return totalprice + current_price.price;
},0);
console.log(sum_value);