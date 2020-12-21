var player1_number = Math.floor(Math.random()*6) + 1;
var player2_number = Math.floor(Math.random()*6) + 1;

player1_source = "images/dice"+player1_number+".png";
player2_source = "images/dice"+player2_number+".png";
document.getElementsByTagName("img")[0].src = player1_source;
document.getElementsByTagName("img")[1].src = player2_source;

if (player1_number > player2_number){
	document.querySelector(".result").textContent = "🚩Player 1 Wins!";
}

if (player1_number < player2_number){
	document.querySelector(".result").textContent = "Player 2 Wins!🚩";
}

if (player1_number === player2_number){
	document.querySelector(".result").textContent = "Draw!";
}