// How to clone an array
let array1 = ["item1", "item2","item3"];
//let array2 = [].concat(array1); //1st way
// 2nd way-Use slice that prints array items from start to end or from a particular position.
// let array2 = array1.slice(0);
// 3rd way-using a spread operator
let array2 = [...array1];
array1.push("item4");
console.log(array1);
console.log(array2);  