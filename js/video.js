var video;
video = document.querySelector('#player1')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//document.querySelector("#play").addEventListener("click", function() {
//onsole.log("Play Video");
//});

//Page load - Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop)
});

//Play button - Play the video and update the volume information. 
doccument.querySelector("#play").addEventListener("click", function() {
	video.play()
	volume = document.querySelector("#slider").value 
	document.querySelector("volume").innerHTML = volume + '%'
});

//Pause botton - pause video
document.querySelector('#pause').addEventListener("click", function(){
	video.pause()
})

//Slow down - Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90
	console.log("New speed: " + video.playbackRate)
})

//Speed up - Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10
	console.log("New speed: " + video.playbackRate)
})

//Skip ahead - Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= 67.403333){
		video.currentTime = 0
		video.play()
	}
	else{
		video.currentTime += 10
	}
	console.log("Current time: " + video.currentTime )
})

//Mute - Mute/unmute the video and update the text in the button.
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerText = 'Unmute'
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerText = 'Mute'
	}
})

//Volume Slider - Change the volume based on the slider and update the volume information.
var slider = dociment.getElementById("slider");
var output = document.getElementById("volume");
slider.oninput = function() {
	output.innerHTML = this.value + '%';
	video.volume = slider.value / 100
}

//Styled - Utilize the existing oldSchool class on the video element
document.querySelector('#vintage').addEventListener("click", function() {
	video.className += " oldSchool"
})

//Original - Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video"
})