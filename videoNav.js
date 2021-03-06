var orig = document.getElementById("original");
var squiggle = document.getElementById("squiggle");
var circleGIF = document.getElementById("circleGIF");

var button = document.getElementById("beginbutton");

var vidid = ["squiggle", "original"]
var gifid = ["circleGIF", "circleGIF"]
      
function buttonPress() { 
	button.style.display="none";
	button.classList.toggle("lightbutton");
	button.classList.toggle("darkbutton");
	squiggle.play();
}  
      
function doSomething() {
	shuffleDown();
	squiggle.play();
}
      
function shuffleDown() {
	orig.style.zIndex="-1";
	circleGIF.style.zIndex="-1";
}
      
function idle() {
	circleGIF.style.zIndex="2";
	button.style.display="block";
}
