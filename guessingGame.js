// Create secret number
var secretNumber = 3;
// ask user for guess
var guess = Number(prompt("Guess a number"));
alert(guess);
// check if guess is right
// use Number in the if statement
if (guess === secretNumber) {
	alert("You got it right!");
}
// Otherwise, check if higher
else if (guess > secretNumber) {
	alert("Too High.  Guess again");

}
// Otherwise, check if lower
else {
	alert("Too low.  Guess again!");
}