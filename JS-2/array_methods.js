//Array methods
// 1.Push-adds an element at the last index into an array.
let fruits = ["Apple","Kiwi","Mango","Banana","Strawberry","Orange"];
console.log(fruits);
fruits.push("Leechi");
console.log(fruits);

// 2.Pop-removes the last item from an array.
let popped_fruit = fruits.pop(); //this dont only pops the item but also returns the popped item.
console.log(fruits);
console.log("Popped fruit is:",popped_fruit);

// 3.unshift-behaves like push but adds the element at the starting of an array.
fruits.unshift("Chickoo");
console.log(fruits);

// 4.shift-behaves like pop but removea the element from the starting of an array.
let rm_fruit = fruits.shift();
console.log(fruits);
console.log(`${rm_fruit} is removed from an array.`);

// 5.Concatenation or Merging-combines two or more arrays.
let animals = ["dog","cat","kangaroo",'Monkey'];
let merge = fruits.concat(animals);
console.log(merge);
console.log(`there are ${merge.length} elements in new array.`)

// 6.splice-helps to add elements in an array at a particular position. here 2 represents the position where elements are to be added and 0 is the number of elements to be removed from an array.
animals.splice(2,1,"Panda","Zebra");
console.log(animals);

// 7.slice-
const citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);