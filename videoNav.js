var orig = document.getElementById("original");
var squiggle = document.getElementById("squiggle");
var circleGIF = document.getElementById("circleGIF");
var button = document.getElementById("beginbutton");

      
function playVid() { 
  button.style.display="none";
  orig.play();
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
