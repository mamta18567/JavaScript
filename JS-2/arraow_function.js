const isEven = (number)=>
{
    return number%2==0;
}
const ans = isEven(5);
console.log(ans);

//firstchar arrow function
const firstchar=(myname)=>
{
    return myname[1];
}
const answer = firstchar("mamta");
console.log(answer);

const search=(arr,number)=>
{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==number)
        {
            return i;
        }
    }
}
const searching = search([1,2,3,4,5,6],2);
console.log(searching);