const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const skipBtn = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  //  if(video.paused){
  //    video.play()
  //    console.log('시작');
  //  }else{
  //    video.pause();
  //    console.log('중지');
  //  }
}

function updateBtn() {
  const icon = this.paused ? "►" : "| |";
  toggle.textContent = icon;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip); //.currentTime : 재생시간 지정, .parseFloat : ''되어있는 숫자를 실수로 바꿈
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  //(현재 재생시간/전체 재생기간)*100
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
skipBtn.forEach((btn) => btn.addEventListener("click", skip));
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgress); //오디오,비디오의 재생위치가 변경될때 timeupdate이벤트 사용

toggle.addEventListener("click", togglePlay);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => {
  mousedown && scrub(e); //scrub(e)를 하면 마우스 타겟을 따라 게이지가 올라가거나 내려감
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
