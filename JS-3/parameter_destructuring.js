const person = {
    fname:"Mamta",
    gender:"Female",
    age:20
}
function getDetails({fname,gender,age})
{
    console.log(fname);
    console.log(gender);
    console.log(age);
}
getDetails(person);