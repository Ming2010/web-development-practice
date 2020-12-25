
var level = 0;
var started = false;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	// store selected color to the array
	gamePattern.push(randomChosenColour);
	// select the button and make it flash
	$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
	// play sound
	playSound(randomChosenColour);
	level++;
	$("#level-title").text("level "+level);
}

// play sound
function playSound(name){

	var audio = new Audio("sounds/"+name+".mp3");
	audio.play();
}

// the press animation
function animatePress(currentColour) {

	$("#"+currentColour).addClass("pressed");
	setTimeout(function() {
    $("#"+currentColour).removeClass('pressed');}, 100);
}

// check if the answer is right
function checkAnswer(currentLevel) {

	var l = userClickedPattern.length;
	var answer;
	if (userClickedPattern[l-1].toString() === gamePattern[l-1].toString()){
		answer = "success";
	}
	else {
		answer = "wrong";
	}

	if ((l === currentLevel)&&(answer === "success")) {
			setTimeout(function() {
	    	nextSequence();}, 1000);
			userClickedPattern = [];
		}
	if (answer === "wrong") {
		playSound("wrong")
		$("body").addClass("game-over")
		setTimeout(function() {
    	$("body").removeClass("game-over");}, 200);
    	$("#level-title").text("Game Over, Press Any Key to Restart");
    	startOver();
	}
	
}

function startOver() {
	level = 0;
	started = false;
	gamePattern = [];
	userClickedPattern = [];
}

// check if the game is started
$(document).keypress(function() {

	if (started === false) {
		nextSequence();
		started = true;
	}
})

// check if the button is clicked
$(".btn").click(function() {

	var userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(level);
})
















