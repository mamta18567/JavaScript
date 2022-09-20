const user1 = {
    fname:"Mamta",
    age:20,
    about:function(hobby,fav_musician)
    {
        console.log(this.fname,this.age,hobby,fav_musician);
    }
}
const user2 = {
    fname:"Ishita",
    age:20
}
const func = user1.about.bind(user1,"guitar","moxart");
func();
// In case of bind we use a variable to store the value of bind function 