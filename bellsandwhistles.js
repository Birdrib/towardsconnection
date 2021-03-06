var narration = [
	"index is at 0",
	"index is at 1",
	"index is at 2",
	"index is at 3"
	];

function overlayon() {
	document.getElementById("changingoverlay").innerHTML = narration[index];
	document.getElementById("overlay").style.display = "block";
}

function overlayoff() {
	document.getElementById("overlay").style.display = "none";
}
