var orig = document.getElementById("original");
var squiggle = document.getElementById("squiggle");
var circleGIF = document.getElementById("circleGIF");

var button = document.getElementById("beginbutton");

var vidid = ["squiggle", "original"];
var gifid = ["circleGIF", "circleGIF"];

var index = -1;
      
function buttonPress() { 
	index = index + 1;
	//button.style.display="none";
	button.value="I've been clicked"
	button.classList.toggle("lightbutton");
	button.classList.toggle("darkbutton");
	advanceVideo();
}  
      
function advanceVideo() {
	var vid = document.getElementById(vidid[index]);
	vid.style.zIndex="1";
	vid.play();
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
