// spread operator in Array
const array1 = [1,2,3];
const array2 = [4,5,6];
 
const newArray = [...array1,...array2];
// here we will get combined elements of both the arrays.
console.log(newArray);

const newarray = [..."mamta"];
// here the string "mamta" is iterable so it will separate each alphabet.
console.log(newarray);



// spread operator in Objects.
const obj1 = {
    key1:"value1",
    key2:"value2"
};
const obj2 = {
    key3:"value3",
    key4:"value4",
    key1:"V1"
};
// const newObj = {...obj1,...obj2,...["abc"]};
// console.log(newObj);
const iobj = {..."mamta",..."Vanshika"};
console.log(iobj);
