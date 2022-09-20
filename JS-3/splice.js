const array = ["item1","item2","item3"];
// splice(start,delete,insert)
const deleteItem = array.splice(0,1);
console.log(array);

const insertItem = array.splice(2,0,"item4");
console.log(array);

// const new_array = array.splice(0,1,"ItemB");
// console.log(array);

const new_array = array.splice(0,1,"item1","item2");
console.log(array);