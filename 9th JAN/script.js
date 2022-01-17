var audio = new Audio("KBC.mp3");
audio.play();
let btn = document.createElement("button");
function disbtn() {
  btn.innerText = "Click To Play KBC";
  var content = document.querySelector(".wrapper");
  content.appendChild(btn);
}
setTimeout(disbtn, 6000);
btn.addEventListener("click", function () {
  window.location.href = "in.html";
});
