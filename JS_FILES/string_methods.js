// 1.trim()
let firstname = "   Mamta   ";
console.log(firstname);
console.log(firstname.length);
let cut = firstname.trimStart();
console.log(cut);
let new_string = firstname.trim();
console.log(new_string);
console.log(new_string.length);

// 2.toUppercase()
let new_string1 = firstname.toUpperCase();
console.log(new_string1);
// 3.toLowercase()
let smallLetters = firstname.toLowerCase();
console.log(smallLetters);
// 4.Slice 
let new_name = 'Mamta@123';
console.log(new_name);
let change = new_name.slice(0,5);
console.log(change);
// 5.Concatenation
let firstname1 = "Mamta";
let lastname = "Arora";
let fullname = firstname1 +" "+ lastname;
console.log(fullname);

let age = +"20";
let new_age = +"20";
let total_age = age + new_age;
console.log(total_age);
console.log(typeof total_age);



