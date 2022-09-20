const obj = {
    key1: "Value1",
    key2: "Value2"
}
//first way using spread operator.
// const obj2 = {...obj};
// console.log(obj2);

//Second way using .assign()
const obj2 = Object.assign({},obj);
obj2.key3 = "Value3";
console.log(obj2);
