let fullscreen = document.querySelector(".fullscreen");
let close = document.getElementById("close");
close.addEventListener("click", function () {
  fullscreen.style.display = "none";
});
function openFullScreen(source) {
  fullscreen.style.display = "flex";
  pic.src = source;
}
