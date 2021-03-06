var narration = [
	"Welcome!<br>Press [begin] to start this thing.",
	"squiggle squiggle!",
	"circle!!!",
	"Yeah,<br>this is gonna take a sec.<br>This is the orignial animation. It'll get broken up soon."
	];

var static = "<br><br><br>this text doesn't go anywhere<br>eventually I'll write something nice here";

function overlayon() {
	document.getElementById("changingoverlay").innerHTML = narration[index].concat(static);
	document.getElementById("overlay").style.display = "block";
}

function overlayoff() {
	document.getElementById("overlay").style.display = "none";
}
