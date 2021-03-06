var orig = document.getElementById("original");
var squiggle = document.getElementById("squiggle");
var circleGIF = document.getElementById("circleGIF");

var button = document.getElementById("beginbutton");

var vidid = ["original", "squiggle", "original", "squiggle"];
var gifid = ["circleGIF", "circleGIF", "circleGIF", "circleGIF"]; //first gif is start gif

var index = 0;
      
function buttonPress() { 
	//window.alert(index);
	shuffleDown();
	index = index + 1;
	advanceVideo();
	
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
	var idlegif = document.getElementById(gifid[index]);
	vid.style.zIndex="-1";
	idlegif.style.zIndex="-1";
}
      
function idle() {
	document.getElementById(gifid[index]).style.zIndex="2";
}
