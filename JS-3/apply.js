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
// user1.about.call(user2,"guitar","moxart");
user1.about.apply(user2,["guitar","bach"]);
// the only difference bw call and apply is that we pass the extra values as an array instead of passing separate values as in case of call. 