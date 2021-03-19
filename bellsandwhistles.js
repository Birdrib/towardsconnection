var narration = [
	"Hello!<br><br>This animation was created as my final project for an<br>art history course on Feminist Utopias and Dystopias.<br><br>We read a lot of theory and complicated articles about<br>utopic visions and social movements and how people<br>take action to better or worsen the world - sometimes<br>intentionally and sometimes not.<br><br>Here, I try to simplify these ideas into visuals that are<br>a bit more aproachable than long, jargon-y musings.<br><br>We will progress from individuality to connection,<br>stopping at a few points along the way to explore how<br>people interact with one another and society.<br><br>As we go, this animation will stop for you, let you pause<br>for a moment, and then continue at your own pace.<br><br>In this handy dandy [about] section, you can find some<br>of my thoughts and inspirations for each section of the<br>animation. Alternatively, go ahead and check out the PDF<br>linked below for all the same information.",
	"I took a lot of inspiration from the visual<br>descriptions in Vito Acconci's “Public Space,<br>Private Time.” People are just dots, interacting<br>with one another in space and time.<br><br>We start with individuality, each dot doing its<br>own thing, it's a functional enough system.",
	"We understand, though, that being an individual,<br>different from others, means that we will interact<br>with the world in unequal ways. The identities we<br>hold, whether that be race, gender, sexuality,<br>income level, ability status, etc. affect how we<br>move through the world.<br><br>In some ways it’s brutal. In others, beautiful.",
	"There's a whole different kind of beauty<br>when these individuals come together. They're<br>able to collaborate to accomplish more than<br>they could alone.",
	"Collaboration isn’t necessarily a highly structured<br>event. In the spirit of emergent strategies, small<br>actions from many sources come together to<br>form a larger whole.<br><br>The little squares interact with the big square,<br>reshaping both parties. In the spirit of Octavia<br>Butler, “All that you touch You Change. All that<br>you Change Changes you.”",
	"There are more official ways to work together<br>than to rely on small scale interaction to<br>eventually lead to larger change.<br><br>Dots cluster, people organize.<br>By organizing, the individuals grow together.<br><br>Organized groups have different abilities, capable<br>of larger outreach and coordinated support.",
	"But we shouldn’t forget that every organization<br>is made of  individuals holding intersecting<br>identities. While people tend to organize around<br>a single concept, every one person is a part of<br>multiple communities.<br><br>Organizing is powerful, but there are also other<br>considerations in approaching collective action.",
	"We can reimagine our systems and structures.<br><br>These boxes are meant to emulate the layouts in<br>Dolores Hayden's “What Would a Non-Sexist City<br>Be Like?” where she pitched the idea that<br>subururban blocks could be turned inward<br>toward one another and shared space rather than<br>divided outward into the streets.<br><br>The reorientation can be physical as<br>Hayden describes, but is also a way of<br>approaching problems in ways outside of the<br>systems we’re accustomed to.",
	"Sometimes, there are dimensions we didn’t see<br>from our original point of view.<br><br>Sometimes, it’s a matter of flipping the problem<br>over and trying again from a different angle.<br><br>Sometimes, you just have to rely on luck from a<br>flip of a coin.<br><br>The transition out of the skyline here is a nod<br>to the distinct towers of June Jordan’s “Skyrise for<br>Harlem.” A project which reimagined city planning,<br>but was never realized.<br><br>Reorienting ourselves and our problems shows new<br>solutions, but isn’t always easy or even feasible.",
	"Regardless of difficulty, with a new mindset<br>people form connections.<br><br>And these connections fundamentally change<br>how individuals move and interact. There's an<br>interplay between them, and each individual<br>must be considered also as a part<br>of a larger network.",
	"These connections may vary, stretch thin, break,<br>reform, tranform, strengthen, or all of the above.",
	"People are sronger with connections. On the<br>small scale, able to better provide and receive<br>support and generosity, and on the large scale to<br>reimagine what the world could look like.<br><br>I believe connection is the first step towards a<br>utopic vision."
	];

var static = " "; //"<br><br><br>Keep clicking on [about] throughout<br>the animation for extra commentary.";

function overlayon() {
	document.getElementById("changingoverlay").innerHTML = narration[index].concat(static);
	document.getElementById("overlay").style.display = "block";
}

function overlayoff() {
	document.getElementById("overlay").style.display = "none";
}
