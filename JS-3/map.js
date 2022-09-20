// const numbers = [3,4,2,1,5,6,];
// const square = function(number)
// {
//     return number*number;
//     // In map, while using a function we need to return something instead of using console.log.
// }
// const new_no = numbers.map(square);
// console.log(new_no);
//we can also use more parameters like in other functions.
// const square = function(number,index)
// {
//     return `index:${index},number:${number*number}`;
// }
// const new_no = numbers.map(square);
// console.log(new_no);

const users = [
    {fname:"mamta",age:20},
    {fname:"mamta1",age:21},
    {fname:"mamta2",age:23},
    {fname:"mamta3",age:22}
]
const firstname = function(user)
{
    return user.fname;
}
const newArray = users.map(firstname);
console.log(newArray);