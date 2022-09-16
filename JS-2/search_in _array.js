function searching(arr,number)
{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==number)
        {
            console.log(i);
        }
    }
}
searching([1,2,3,4,5,6],22);