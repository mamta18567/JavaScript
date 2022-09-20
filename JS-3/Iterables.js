// String and Array are Iterables. We can use for loop in these cases.
const fname = "Mamta";
for(let char of fname)
{
    console.log(char);
}
const array = ["item1","item2","item3"];
for(let item of array)
{
    console.log(item);
}
// Objects are not iterable 
// array like object - that have length property and can be accessed through index. So strings are array like object.
const fname1 = "mamta";
console.log(fname1.length);
console.log(fname1[1]);