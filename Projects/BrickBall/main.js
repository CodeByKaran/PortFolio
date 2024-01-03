const resetbtn = document.getElementById("reset")
let board;
board_height = 500;
board_width = 400;
let ctx;

let playerWidth = 60;
let playerHeight = 10;
let ballheight = 10;
let ballwidth = 10;


let ballVelocityX = 3;
let ballVelocityY = 3;
let playerVelocity = 10;

let player = {
  x: board_width / 2 - playerWidth / 2,
  y: board_height - playerHeight - 5,
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

let blocks = [];
let blockWidth = 50;
let blockHeight = 10;
let columns = 6;
let row = 3
let maxrow=10;
let blockcount = 0
let blockX = 30;
let blockY = 45;
let score = 0;
let gameover = false
let isLevelOver=false;
let levelCount=0;

window.onload = () => {
  let a;
  
  
  board = document.getElementById("board");
  board.height = board_height;
  board.width = board_width;
  ctx = board.getContext("2d");

  ctx.fillStyle = "skyblue"
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = "skyblue"
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

  requestAnimationFrame(update)

  document.addEventListener("touchmove", movePlayer)
  
  
  createBlocks();
}

function update() {
 
 if(gameover ){
   resetbtn.removeAttribute("disabled")
   resetbtn.style.opacity=1;
   if(isLevelOver){
     resetbtn.innerHTML="Next Level"
   }
 }
 
  if (gameover) return;

  ctx.clearRect(0, 0, board_width, board_height)

  ctx.fillStyle = "skyblue"
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  ctx.fillStyle="pink"
  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

  if (ball.y <= 0) {
    ball.velocityY *= -1;
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
  }
  else if (leftcollision(ball, player) || rightcollision(ball, player)) {
    ball.velocityX *= -1;
  }

  blocks.forEach((e) => {
    if (!e.break) {

      if (topcollison(ball, e) || bottomcollison(ball, e)) {
        e.break = true;
        ball.velocityY *= -1;
        blockcount -= 1;
        score += 100;
      }
      else if (leftcollision(ball, e) || rightcollision(ball, e)) {
        e.break = true;
        ball.velocityX *= -1;
        blockcount -= 1;
        score += 100;
      }
      ctx.fillStyle = "gold"
      ctx.fillRect(e.x, e.y, e.width, e.height)
    }
    
    if(blockcount==0){
      gameover=true;
      isLevelOver=true;
    }
    
  })
  ctx.fillStyle="skyblue"
  ctx.font = "20px monospace"
  ctx.fillText(score, 25, 25, 90, 30);
  requestAnimationFrame(update);
}

function checkColide(xpos) {
  return false
}


function movePlayer(e) {
  e.preventDefault();

  let moveRatio = e.touches[0].clientX

  if (!checkColide(moveRatio)) {
    player.x = moveRatio
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


function createBlocks() {
  blocks = [];
  for (let c = 0; c < columns; ++c) {
    for (let r = 0; r < row; ++r) {
      let block = {
        x: blockX + c * blockWidth + c * 10,
        y: blockY + r * blockHeight + r * 10,
        width: blockWidth,
        height: blockHeight,
        break: false
      }
      blocks.push(block)
    }
  }
  blockcount = blocks.length;

}



function reset() {
  resetbtn.style.opacity=0;
  if(gameover && !isLevelOver){
  row-=levelCount;
  gameover = false;
  player = {
    x: board_width / 2 - playerWidth / 2,
    y: board_height - playerHeight - 5,
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
  blocks = [];
  score = 0;
  createBlocks();
  update();
  resetbtn.setAttribute("disabled","true")
  levelCount=0;
  }
  if(gameover && isLevelOver){
    levelCount+=1;
    gameover = false;
    isLevelOver=false;
    row+=levelCount;
  player = {
    x: board_width / 2 - playerWidth / 2,
    y: board_height - playerHeight - 5,
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
  blocks = [];
  score = 0;
  createBlocks();
  update();
  resetbtn.setAttribute("disabled","true")
  resetbtn.innerHTML="Play Again"
  }
}