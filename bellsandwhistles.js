var narration = [
	"Hello!<br><br>This animation was created as my final project for an<br>art history course on Feminist Utopias and Dystopias.<br><br>We read a lot of theory and complicated articles about<br>utopic visions and social movements and how people<br>take action to better or worsen the world - sometimes<br>intentionally and sometimes not.<br><br>Here, I try to simplify these ideas into visuals that are<br>a bit more aproachable than long, jargon-y musings.<br><br>We will progress from individuality to connection,<br>stopping at a few points along the way to explore how<br>people interact with one another and society.<br><br>As we go, this animation will stop for you, let you pause<br>for a moment, and then continue at your own pace.<br><br>In this handy dandy [about] section, you can find some<br>of my thoughts and inspirations for each section of the<br>animation. Alternatively, go ahead and check out the PDF<br>linked below for all the same information.",
	"I took a lot of inspiration from the visual<br>descriptions in Vito Acconci's “Public Space,<br>Private Time.” People are just dots, interacting<br>with one another in space and time.<br><br>We start with individuality, each dot doing its<br>own thing, it's a functional enough system.",
	"ind dark",
	"There's a whole different kind of beauty<br>when these individuals come together. They're<br>able to collaborate to accomplish more than<br>they could alone.",
	"Collaboration isn’t necessarily a highly structured<br>event. In the spirit of emergent strategies, small<br>actions from many sources come together to<br>form a larger whole.<br><br>The little squares interact with the big square,<br>reshaping both parties in the spirit of Octavia<br>Butler’s “All that you touch You Change. All that<br>you Change Changes you.”",
	"(ORG)",
	"org dark",
	"(REOR)",
	"reor dark",
	"(CON)",
	"con dark",
	"(END)"
	];

var static = " "; //"<br><br><br>Keep clicking on [about] throughout<br>the animation for extra commentary.";

function overlayon() {
	document.getElementById("changingoverlay").innerHTML = narration[index].concat(static);
	document.getElementById("overlay").style.display = "block";
}

function overlayoff() {
	document.getElementById("overlay").style.display = "none";
}
