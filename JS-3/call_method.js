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
user1.about.call(user2,"guitar","moxart");
// user1.about.call() will give undefined values