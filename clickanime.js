const start = 3000;
const clickFunc = function (cxt) {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var canvas = document.getElementById("canvas");
  var btn4 = document.getElementById("btn4");
};
//
// target.classList.add("hidden");
// target.classList.remove("hidden");
function clickHandle(e) {
  var target = e.target;
  target.onclick = null;
  switch (target.id) {
    case "btn1":
      anime1(target);
      break;
    case "btn2":
      anime2(target);
      break;
  }
}

function anime1(target) {
  target.classList.add("heartBeat");
  setTimeout(function () {
    target.classList.add("opacity-0");
  }, 3000);
  setTimeout(function () {
    target.classList.add("hidden");
    btn2.classList.remove("hidden");
    btn2.classList.add("opacity-1");
  }, 5000);
  setTimeout(function () {
    btn2.classList.remove("opacity-0");
  }, 5500);
}

function anime2(target) {
  target.classList.add("heartBeat");
  var context = canvas.getContext("2d");
  setTimeout(function () {
    target.classList.add("opacity-0");
  }, 3000);
  setTimeout(function () {
    target.classList.add("hidden");
    btn3.classList.remove("hidden");
    btn3.classList.add("opacity-1");
  }, 5000);
  setTimeout(function () {
    btn3.classList.remove("opacity-0");
    btn3.classList.add("heartBeat");
    btn3.classList.add("anima-infinite");
  }, 5500);
  setTimeout(function () {
    btn3.classList.add("opacity-0");
  }, 11000);
  setTimeout(function () {
    btn3.classList.add("hidden");
    canvas.classList.remove("hidden");
    canvas.classList.remove("opacity-0");
    renderAnime(context);
  }, 12000);
  setTimeout(function () {
    canvas.classList.add("opacity-0");
  }, 29000);
  setTimeout(function () {
    canvas.classList.add("hidden");
  }, 30000);
  setTimeout(function () {
    btn4.classList.remove("hidden");
    btn4.classList.remove("opacity-0");
  }, 30500);
}
