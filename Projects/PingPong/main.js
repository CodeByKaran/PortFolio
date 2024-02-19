const resetbtn = document.getElementById("reset")
const btns=document.querySelectorAll("button");
 
let board;
board_height = 500;
board_width = 410;
let ctx;

let playerWidth = 60;
let playerHeight = 10;
let ballheight = 10;
let ballwidth = 10;
let gameover=false
let score=0;
let score1=0;
let movePlayer0=true;
let movePlayer1=false;

let vscom=true;
let vsPlayer=false;

let ballVelocityX = 4;
let ballVelocityY = 4;
let playerVelocity = 10;

let player = {
  x: board_width / 2 - playerWidth / 2,
  y: board_height - playerHeight - 5,
  width: playerWidth,
  height: playerHeight,
  velocityP: playerVelocity
}

let player1 = {
  x: board_width / 2 - playerWidth / 2,
  y:  playerHeight -5,
  width: playerWidth,
  height: playerHeight,
  velocityP: playerVelocity
}


let ball = {
  x: board_width / 2,
  y: board_height / 2,
  width: ballwidth,
  height: ballheight,
  velocityX: ballVelocityX,
  velocityY: ballVelocityY
}

function comp(e) {
  btns[0].classList.add("active")
  btns[1].classList.remove("active")
  vscom=true;
  vsPlayer=false;
  reset();
}

function play() {
  btns[1].classList.add("active")
  btns[0].classList.remove("active")
  vsPlayer=true;
  vscom=false;
  reset();
}

window.onload = () => {
  let a;
  board = document.getElementById("board");
  board.height = board_height;
  board.width = board_width;
  ctx = board.getContext("2d");

  ctx.fillStyle = "skyblue"
  ctx.fillRect(player.x, player.y, player.width, player.height);
  
  ctx.fillStyle = "skyblue"
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

  ctx.fillStyle = "skyblue"
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);


  //document.addEventListener("touchstart",movePlayer)
  document.addEventListener("touchmove", movePlayer)
  //document.addEventListener("touchend",movePlayer)
  
  requestAnimationFrame(update)
  
}

function update() {
 
 if(gameover ){
   resetbtn.removeAttribute("disabled")
   resetbtn.style.opacity=1;
 }
 
  if (gameover) return;

  ctx.clearRect(0, 0, board_width, board_height)

  ctx.fillStyle = "lime"
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = "lime"
  ctx.fillRect(player1.x, player1.y, player1.width, player1.height);


  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  ctx.fillStyle="lime"
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

  if (ball.y <= 0) {
    ctx.fillStyle="red"
    ctx.font = "20px monospace "
    ctx.fillText("Game Over!", board_width / 2 - 40, board_height / 2, 90,30)
    gameover = true;
  }

  if (ball.x + ball.width >= board_width || ball.x <= 0) {
    ball.velocityX *= -1;
  }

  if (ball.y + ballheight >= board_height) {
    //game over
    ctx.fillStyle="red"
    ctx.font = "20px monospace "
    ctx.fillText("Game Over!", board_width / 2 - 40, board_height / 2, 90, 30)
    gameover = true;
  }

  if (topcollison(ball, player) || bottomcollison(ball, player)) {
    ball.velocityY *= -1;
    score1+=100;
    if(vsPlayer && !vscom){
    movePlayer0=false;
    movePlayer1=true
    }
     if(vscom && !vsPlayer)
    moveplayer1Paddle();
  }
  else if(topcollison(ball, player1) || bottomcollison(ball, player1)){
    if(vsPlayer && !vscom){
    movePlayer1=false;
    movePlayer0=true;
    }
   ball.velocityY *= -1;
   score+=100;
  }
  else if (leftcollision(ball, player) || rightcollision(ball, player)) {
    ball.velocityX *= -1;
    score1+=100;
    if(vsPlayer && !vscom){
    movePlayer0=false;
    movePlayer1=true
    }
    if(vscom && !vsPlayer)
    moveplayer1Paddle();
  }
  else if(leftcollision(ball, player1) || rightcollision(ball, player1)){
    ball.velocityX*=-1;
    score+=100;
    if(vsPlayer && !vscom){
    movePlayer1=false;
    movePlayer0=true;
    }
  }


  ctx.fillStyle="gold"
  ctx.font = "20px monospace"
  ctx.fillText(score, 25, board_height/2-50, 90, 30);
  
  ctx.fillStyle="gold"
  ctx.font = "20px monospace"
  ctx.fillText(score1, 25, board_height/2+50, 90, 30);
  
  ctx.fillStyle="white"
  ctx.fillRect(0,board_height/2,board_width,1);
  requestAnimationFrame(update);
}

function checkColide(xpos) {
  return false
}

function moveplayer1Paddle() {
  setInterval(()=>{
    if(vscom)
  player1.x=ball.x - player1.width/3;
  },1)
}

function movePlayer(e) {
  e.preventDefault();
  let moveRatio = e.touches[0].clientX - 30
  let moveRatioy = e.touches[0].clientY
  
  if(movePlayer0){
    player.x=moveRatio;
  }
  
  if(vsPlayer){
 if(movePlayer1){
    player1.x=moveRatio;
  }
  }

}

function detectcollison(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
}

function topcollison(ball, block) {
  return detectcollison(ball, block) && (ball.y + ball.height) >= block.y
}

function bottomcollison(ball, block) {
  return detectcollison(ball, block) && (block.y + block.height) >= ball.y;
}

function leftcollision(ball, block) {
  return detectcollison(ball, block) && (ball.x + ball.width) >= block.x;
}

function rightcollision(ball, block) {
  return detectcollison(ball, block) && (block.x + block.width) >= ball.x;
}





function reset() {
  resetbtn.style.opacity=0;
  if(gameover){
  gameover = false;
  player = {
    x: board_width / 2 - playerWidth / 2,
    y: board_height - playerHeight - 5,
    width: playerWidth,
    height: playerHeight,
    velocityP: playerVelocity
  }
  player1={
    x: board_width / 2 - playerWidth / 2,
  y:  playerHeight - 5,
  width: playerWidth,
  height: playerHeight,
  velocityP: playerVelocity
  }
  ball = {
    x: board_width / 2,
    y: board_height / 2,
    width: ballwidth,
    height: ballheight,
    velocityX: ballVelocityX,
    velocityY: ballVelocityY
  }
  score = 0;
  score1=0;
  update();
  resetbtn.setAttribute("disabled","true")
  levelCount=0;
  }
  movePlayer0=true;
  movePlayer1=false;
}

