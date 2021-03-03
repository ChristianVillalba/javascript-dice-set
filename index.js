//Generating a random numeber for the Dice Game
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Two different dices
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

// The result:
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = ("🚩 Player 1 wins!");
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = ("Player 2 wins! 🚩");
} else {
  document.querySelector("h1").textContent = ("Draw");
}
