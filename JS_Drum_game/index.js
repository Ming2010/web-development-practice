
// detect mouse click
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {

	buttonLetter = this.innerHTML;
	playSound(buttonLetter);
	playAnimation(buttonLetter);
		
})};


// detect keyboard press
document.addEventListener("keydown", function(event){
	charLetter = event.key;
	playSound(charLetter);
	playAnimation(charLetter);
});


// play sound
function playSound(char){

	switch(char) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
		break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
		break;
		case "j":
			var tom4 = new Audio("sounds/crash.mp3");
			tom4.play();
		break;
		case "k":
			var tom4 = new Audio("sounds/kick-bass.mp3");
			tom4.play();
		break;
		case "l":
			var tom4 = new Audio("sounds/snare.mp3");
			tom4.play();
		break;

		default: console.log();}
	}


// play animation
function playAnimation(char) {

	var activeButton = document.querySelector("."+char);
	activeButton.classList.add("pressed");
	setTimeout(function () {
		activeButton.classList.remove("pressed")}, 100);

}








