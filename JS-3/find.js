const myArray = ["hello", "my1","name","is","MamtaArora"];
// function islength(string)
// {
//     return string.length == 2;
// }
// const ans = myArray.find(islength);
// console.log(ans);
const ans = myArray.find((string)=>{
    return string.length==2
});
console.log(ans);

const users = [
    {userId:1, userName:"Mamta"},
    {userId:2, userName:"Ishita"},
    {userId:3, userName:"Vanshika"},
    {userId:4, userName:"Vishal"}
]
function isId(user)
{
    return user.userId==4;
}
const new_entry = users.find(isId);
console.log(new_entry);