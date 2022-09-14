let winningNumber = 20;
let userguess = +prompt("Guess a number");
if(userguess===winningNumber)
{
    console.log("You are exactly right!");
}
else
{
    console.log("Your answer is wrong!");
    if(userguess<winningNumber)
    {
        console.log("too low!!");
    }
    else
    {
        console.log("too high!!");
    }
}