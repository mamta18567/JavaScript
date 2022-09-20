const numbers = [1,2,3,4,5,6];
const isEven=function(number)
{
    return number%2==0;
}
const EvenNumbers = numbers.filter(isEven);
console.log(EvenNumbers);
// filter is always used in case when the result is bool type i.e.true or false.