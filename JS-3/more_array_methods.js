// 1.foreach
// 2.map
// 3.filter
// 4.reduce
// 5.sort
// 6.find
// 7.every
// 8.some
// 9.fill
// 10.splice
const numbers = [2,3,4,5,6];

const product = numbers
var i = 0
for (const num of product) {
    product[i] = num*2
    i++
} 

console.log(product)

/*function multi(numbers,index)
{
    // let product = numbers;
    // product.forEach((element, index, arr) => {
    //     arr[index] = element*2;
    // });
    // for(let number of numbers)
    // {
    //     console.log(number*2)
    // }
    console.log(index,numbers);
}
numbers.forEach(multi);
// const ans = multi(numbers);
// console.log(ans);*/

numbers.forEach(function(number,index)
{
    console.log(number*3,index);
})
