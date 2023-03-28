// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var guess = 1;
playername = localStorage.getItem("player_name");
// made for correct Guess
function submit() 
{
    var x = document.getElementById("guessField").value;

if(x == y)
{
  alert("Congratulations!"+playername+" Your Guessed It Right In " + guess + " Guesses ");
  guess= 1;
}
else if (x > y)
{
  guess++;
  alert("Incorrect. Try A Smaller Number");
}
else
{
  guess++;
  alert("Incorrect. Try A Greater Number")
}
}
// function for number guessed by user     
function playAgain()
{
  y = Math.floor(Math.random() * 10 +1);
}