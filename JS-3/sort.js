// const friends = ["mamta","ishita","vanshika","Aksh","akash"];
// friends.sort();
// console.log(friends); 

// const numbers = [5,23,12,1,3];
// numbers.sort((a,b)=>
// {
//     return a-b;
// });
// console.log(numbers);

// working of sort method -
// for ascending order
// if a-b is +ve then, a and b are swapped.
// if a-b is -ve then, a and b are kept as it is.  

const shop = [
    {productId:1, productName:"p1", price:90},
    {productId:2, productName:"p2", price:78},
    {productId:3, productName:"p3", price:900},
    {productId:4, productName:"p4", price:290},
    {productId:5, productName:"p5", price:910}
]

// arranging Low to High:
const lowToHigh = shop.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

//arranging High to Low:
const highToLow = shop.slice(0).sort((a,b)=>{
    return b.price-a.price;
})

console.log(lowToHigh);
console.log(highToLow);
