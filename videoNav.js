var bbutton = document.getElementById("beginbutton");
var abutton = document.getElementById("aboutbutton");

var vidid = ["circle", "squiggle", "circle", "original"];
var gifid = ["startGIF", "wait1", "wait2", "wait3"]; //first gif is start gif

var index = 0;
var end = vidid.length;
      
function buttonPress() { 
	//window.alert(index);
	shuffleDown();
	
	index = index + 1;
	if (index == end) {
		index = 0;
	}
	
	advanceVideo();
	
	bbutton.innerHTML = "continue";
	//bbutton.classList.toggle("lightbutton");
	//bbutton.classList.toggle("darkbutton");
	//abutton.classList.toggle("lightbutton");
	//abutton.classList.toggle("darkbutton");
}  
      
function advanceVideo() {
	var vid = document.getElementById(vidid[index]);
	vid.style.zIndex="1";
	vid.play();
}
	
function doSomething() {
	window.alert(index);
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
