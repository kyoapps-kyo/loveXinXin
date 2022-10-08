var WINDOW_WIDTH = 350;
var WINDOW_HEIGHT = 350;
var RADIUS = 7;
const MARGIN_TOP = 60;
const MARGIN_LEFT = 30;
var r, g, b;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  clickFunc(context);
};

function renderAnime(cxt) {
  var i = 1;
  setInterval(function () {
    renderGroup(i++, cxt);
  }, 2000);
  //   renderGroup(2, cxt);
}

function renderGroup(number, cxt) {
  switch (number) {
    case 1:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 10;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 0, cxt);
      break;
    case 2:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 4;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 1, cxt);
      renderDigit(MARGIN_LEFT + 13 * (RADIUS + 1), MARGIN_TOP, 2, cxt);
      renderDigit(MARGIN_LEFT + 29 * (RADIUS + 1), MARGIN_TOP, 3, cxt);
      renderDigit(MARGIN_LEFT + 45 * (RADIUS + 1), MARGIN_TOP, 4, cxt);
      break;
    case 3:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 9;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 6, cxt);
      renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, 6, cxt);
      break;
    case 4:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 9;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 7, cxt);
      renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, 8, cxt);
      break;
    case 5:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 10;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 5, cxt);
      break;
    case 6:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 9;
      renderDigit(MARGIN_LEFT, MARGIN_TOP, 7, cxt);
      renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, 8, cxt);
      break;
    case 7:
      r = parseInt(Math.random() * 256 - 1);
      g = parseInt(Math.random() * 256 - 1);
      b = parseInt(Math.random() * 256 - 1);
      cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      cxt.fillStyle = `rgb(${r},${g},${b})`;
      RADIUS = 7;
      renderDigit(MARGIN_LEFT - 2 * (RADIUS + 1), MARGIN_TOP, 9, cxt);
      renderDigit(MARGIN_LEFT + 13 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
      renderDigit(MARGIN_LEFT + 29 * (RADIUS + 1), MARGIN_TOP, 11, cxt);
      break;
  }
}

function renderDigit(x, y, num, cxt) {
  //   cxt.fillStyle = "rgb(0,102,153)";
  console.log(r, g, b);

  for (var i = 0; i < digit[num].length; i++)
    for (var j = 0; j < digit[num][i].length; j++)
      if (digit[num][i][j] == 1) {
        cxt.beginPath();
        cxt.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        );
        cxt.closePath();

        cxt.fill();
      }
}
