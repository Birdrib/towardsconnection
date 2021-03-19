var bbutton = document.getElementById("beginbutton");

var vidid = ["loopback", "l_ind", "d_ind", "l_coord", "d_coord", "l_org", "d_org", "l_reor", "d_reor", "l_con", "d_con", "end"]; //first video is transition from end back to beginning
var gifid = ["startGIF", "wait_l_ind", "wait_d_ind", "wait_l_coord", "wait_d_coord", "wait_l_org", "wait_d_org", "wait_l_reor", "wait_d_reor", "wait_l_con", "wait_d_con", "wait_end"]; //first gif is start gif

var index = 0;
var end = vidid.length;
      
function buttonPress() { 
	//window.alert(index);
	shuffleDown();
	
	index = index + 1;
	if (index == end) {
		index = 0;
		//play an ending gif!!!! make this stop here
	}
	
	advanceVideo();
	
	bbutton.innerHTML = "continue";
	//bbutton.classList.toggle("lightbutton");
	//bbutton.classList.toggle("darkbutton");
}  
      
function advanceVideo() {
	var vid = document.getElementById(vidid[index]);
	vid.style.zIndex="1";
	vid.play();
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

function doSomething() { //for debugging
	window.alert(index);
}
    
