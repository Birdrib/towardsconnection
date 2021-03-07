var narration = [
	"Welcome!<br>This animation was created as my final project for an<br>art history course on Feminist Utopias and Dystopias.<br><br>We read a lot of theory and complicated articles about<br>psychology and sociology and the ways that people<br>take action to better or worsen the world - sometimes<br>intentionally and sometimes not.<br><br>Here, I try to simplify these ideas into visuals that are<br>a bit more aproachable than long, jargon-y musings.<br>We will progress from individuality to connection,<br>stopping at a few points along the way to explore how<br>people interact with one another and society.<br><br>As we go, this animation will stop for you, let you pause<br>for a moment, and then continue at your own pace.<br><br>In this handy dandy [about] section, you can find some<br>of my thoughts and inspirations for each section of the<br>animation. If clicking this button every time is distracting,<br>go ahead and check out the PDF linked below for all the<br>same information<br><br>Enjoy!",
	"This is temporary text, I'll elaborate on stuff soon.",
	"More temporary text, real stuff coming soon.",
	"Yeah,<br>this is gonna take a sec.<br>This is the orignial animation. It'll get broken up soon."
	];

var static = " "; //"<br><br><br>Keep clicking on [about] throughout<br>the animation for extra commentary.";

function overlayon() {
	document.getElementById("changingoverlay").innerHTML = narration[index].concat(static);
	document.getElementById("overlay").style.display = "block";
}

function overlayoff() {
	document.getElementById("overlay").style.display = "none";
}
