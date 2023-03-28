//Create all variables
let video = document.querySelector("#player1");
let play_button = document.querySelector("#play");
let pause_button = document.querySelector("#pause");
let slow_down = document.querySelector("#slower");
let speed_up = document.querySelector("#faster");
let skip_ahead = document.querySelector("#skip");
let mute_button = document.querySelector("#mute");
let volume_slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");
let styled = document.querySelector("#vintage");
let original = document.querySelector("#orig");

//document.querySelector("#play").addEventListener("click", function() {
//onsole.log("Play Video");
//});

//Page load - Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to ' + video.autoplay)
	console.log('loop is set to ' + video.loop)
});

//Play button - Play the video and update the volume information. 
play_button.addEventListener("click", function() {
	video.play()
	volume.innerHTML = video.volume * 100 + '%' 
	console.log("Play Video");
});

//Pause botton - pause video
pause_button.addEventListener("click", function(){
	video.pause();
	console.log("Pause Video")
})

//Slow down - Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
slow_down.addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed: " + video.playbackRate);
})

//Speed up - Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
skip_ahead.addEventListener("click", function() {
	video.playbackRate *= 1.10;
	console.log("New speed: " + video.playbackRate);
})

//Skip ahead - Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
skip_ahead.addEventListener("click", function() {
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
	if (video.muted == true) {
		mute_button.innerHTML = "Mute";
		video.muted = false;
	}
	else{
		mute_button.innerHTML = "Unmute";
		video.muted = true;
	}
})

//Volume Slider - Change the volume based on the slider and update the volume information.
volume_slider.addEventListener("change", function(){
	video.volume = volume_slider.value / 100;
	volume.innerHTML = video.volume + 100 + "%"
})

//Styled - Utilize the existing oldSchool class on the video element
styled.addEventListener("click", function() {
	video.className += " oldSchool"
})

//Original - Remove the oldSchool class from the video.
original.addEventListener("click", function() {
	video.className = "video"
})