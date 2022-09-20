// Set is iterable and stores data.
// sets also have its own methods.
// there is no index-based access.
// order is not guaranteed.
// sets are only allowed to store unique items only.No duplicates are allowed.
const num = [1,8,9,7];
const numbers = new Set([2,3]);
numbers.add(4);
numbers.add(5);
numbers.add(num);
console.log(numbers);
if(numbers.has(1)){
    console.log("1 IS PRESENT");
}else{
    console.log("1 IS NOT PRESENT");
}
for (let number of numbers)
{
    console.log(number);
}
const myarr=[1,2,4,4,5,6,6,5,6];
const uniqueElement = new Set(myarr);
console.log(uniqueElement);
console.log(uniqueElement.length);//cant calculate length of Set using .length function
let length=0;
for (let element of uniqueElement)
{
    length++;
}
console.log(length);