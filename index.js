var random1 = Math.floor(Math.random() * 6) + 1;
var random2=  Math.floor(Math.random() * 6) + 1;

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

var randomDiceImage1 = "images/dice" + random1 + ".png";
console.log(dice1);
var randomDiceImage2 = "images/dice" + random2 + ".png";

dice1.setAttribute("src",randomDiceImage1);
dice2.setAttribute("src",randomDiceImage2);

if (random1 > random2){
  document.querySelectorAll("h1")[0].innerHTML = "🏆 Player 1 Wins!";
} else if (random1 < random2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins! 🏆";
} else {
  document.querySelectorAll("h1")[0].innerHTML = "It's a Tie! 🎌";
}
