//primitive type
let num1 = 2;
let num2 = num1;
console.log("Value of num1 is:",num1);
console.log("Value of num2 is:",num2);
num1++;
console.log("Values after Incrementing num1");
console.log("Value of num1 is:",num1);
console.log("Value of num2 is:",num2);

//reference type
let array1 = ["Apple","Mango"];
let array2 = array1;
console.log("Array1 contains:",array1);
console.log("Array2 contains:",array2);
array1.push("Banana");
console.log("After pushing a new item into an array");
console.log("Array1 contains:",array1);
console.log("Array2 contains:",array2);