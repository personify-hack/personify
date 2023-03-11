/* Global Variables */

var canvas,
  ctx,
  width = 900,
  height = 600,
  upKey = false,
  downKey = false,
  player_x = 40,
  player_y = 200,
  player_w = 50,
  player_h = 50;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var W = canvas.width;
var H = canvas.height;
var totalBullets = 200,
  bullets = [];

/* Backgrounds */
var background = new Image();
background.src =
  "https://www.jamiecoulter.co.uk/dev/games/galaxian/background.png";
var background_front = new Image();
background_front.src =
  "https://www.jamiecoulter.co.uk/dev/games/galaxian/background-front.png";
var background_back = new Image();
background_back.src =
  "https://www.jamiecoulter.co.uk/dev/games/galaxian/background-back.png";
var bullet = new Image();
bullet.src = "https://www.jamiecoulter.co.uk/dev/games/galaxian/bullet.gif";
var title = new Image();
title.src = "https://www.jamiecoulter.co.uk/dev/games/galaxian/title.png";

// Menu

var menu = new Image();
menu.src = "https://www.jamiecoulter.co.uk/dev/games/galaxian/menu.png";

var fv = 0; /* Front background velocity*/
var bv = 0; /* Back background velocity*/
/* Player Sprites */
var player = new Image();
player.src = "https://www.jamiecoulter.co.uk/dev/games/galaxian/ship.png";

function drawPlayer() {
  ctx.drawImage(
    player,
    player_x,
    player_y,
    player.width / 4,
    player.height / 4
  );
  if (upKey) player_y -= 15;
  else if (downKey) player_y += 15;
  if (leftKey) player_x -= 15;
  else if (rightKey) player_x += 15;
}

function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
}

function drawBullet() {
  if (bullets.length)
    for (var i = 0; i < bullets.length; i++) {
      ctx.drawImage(bullet, bullets[i][2], 90);
    }
}

function moveBullet() {
  for (var i = 0; i < bullets.length; i++) {
    if (bullets[i][1] > -11) {
      bullets[i][1] -= 10;
    } else if (bullets[i][1] < -10) {
      bullets.splice(i, 1);
    }
  }
}
function drawMenu() {
  ctx.drawImage(menu, canvas.width / 2 - menu.width / 2, 400);
}

function drawTitle() {
  ctx.drawImage(title, canvas.width / 2 - title.width / 2, 100);
}
/* Draw backgrounds */
function drawBackground() {
  ctx.drawImage(background, 0, 0); /* Draw main background */
  ctx.drawImage(background_back, bv, 0); /* Draw back background */
  ctx.drawImage(
    background_back,
    900 - Math.abs(bv),
    0
  ); /* Draw second for tile */
  ctx.drawImage(background_front, fv, 0); /* Draw front background */
  ctx.drawImage(
    background_front,
    900 - Math.abs(fv),
    0
  ); /* Draw second for tile */
  if (Math.abs(fv) > background_front.width) {
    /* Check if position exceeds canvas width, if so rest the position  */
    fv = 0;
  }
  if (Math.abs(bv) > background_front.width) {
    /* Check if position exceeds canvas width, if so rest the position  */
    bv = 0;
  }
  fv -= 3; /* Front background velocity*/
  bv -= 2; /* Back background velocity*/
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  setInterval(gameLoop, 25);
  document.addEventListener("keydown", keyDown, false);
  document.addEventListener("keyup", keyUp, false);
}

function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
  if (e.keyCode == 38) upKey = true;
  else if (e.keyCode == 40) downKey = true;
  if (e.keyCode == 88 && bullets.length <= totalBullets)
    bullets.push([player_x + 240, player_y + 80, 60, 20]);
}

function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  if (e.keyCode == 38) upKey = false;
  else if (e.keyCode == 40) downKey = false;
}

/* Game loop */

function gameLoop() {
  clearCanvas();
  drawBackground();
  drawMenu();
  drawTitle();
  //drawPlayer()
  //moveBullet()
  //drawBullet()
}

/* Init */

window.onload = init;
