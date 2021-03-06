var orig = document.getElementById("original");
var squiggle = document.getElementById("squiggle");
var circleGIF = document.getElementById("circleGIF");

var button = document.getElementById("beginbutton");

var vidid = ["original", "squiggle", "original", "squiggle"];
var gifid = ["circleGIF", "circleGIF", "circleGIF", "circleGIF"]; //first gif is start gif

var index = 0;
      
function buttonPress() { 
	shuffleDown();
	index = index + 1;
	advanceVideo();
	window.alert(index);
	
	//button.style.display="none";
	button.classList.toggle("lightbutton");
	button.classList.toggle("darkbutton");
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
	var vid = document.getElementById(vidid[index]);
	var idle = document.getElementById(gifid[index]);
	vid.style.zIndex="-1";
	idle.style.zIndex="-1";
}
      
function idle() {
	circleGIF.style.zIndex="2";
	button.style.display="block";
}
