// Create secret number
var secretNumber = 3;
// ask user for guess
var guess = prompt("Guess a number");
alert(guess);
// check if guess is right
if (Number(guess) === secretNumber) {
	alert("You got it right!");
}