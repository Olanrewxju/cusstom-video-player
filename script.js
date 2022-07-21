const video = document.getElementById("video");
const stop = document.getElementById("stop");
const play = document.getElementById("play");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update the play pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa-solid fa-play fa2x"></i>';
  } else {
    play.innerHTML = '<i class="fa-solid fa-pause fa2x"></i>';
  }
}

//update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //update timestamp
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// set video time to progress
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// stop playing video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
