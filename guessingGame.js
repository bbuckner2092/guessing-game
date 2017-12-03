// Create secret number
var secretNumber = 3;
// ask user for guess
// use Number method after prompt
// Reduces repetitveness
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
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