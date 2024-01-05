const root = document.getElementById("root")
const chnc=document.getElementById("chnc")
const res=document.getElementById("res")
const btnrest=document.getElementById("btnrest")


function Board(id) {
  return { id }
}


function GameStart() {
  return [
  Board("box1"),
  Board("box2"),
  Board("box3"),
  Board("box4"),
  Board("box5"),
  Board("box6"),
  Board("box7"),
  Board("box8"),
  Board("box9")
  ]
}

let GameBoard = GameStart();

GameBoard.forEach((e) => {
  let input = document.createElement("div");
  input.value = e.value;
  input.id = e.id;
  input.classList.add("inpbox");
  root.appendChild(input);
})


const Box = document.querySelectorAll(".inpbox");

let player = 'X'


function RemoveEvent(id) {
  document.getElementById(id).removeEventListener("click", Put_x_o);
}


function EndGame() {
  Box.forEach((e) => {
    e.removeEventListener("click", Put_x_o);
  })
}


let DrawCheck=[]
let GameWin_Not=false;



function CheckWin(player) {
  let P = player;
  
  for (let i = 0; i < Box.length; ++i) {

    //Horizontal Check
    if (Box[0].innerText == P & Box[1].innerText == P & Box[2].innerText == P || Box[3].innerText == P & Box[4].innerText == P & Box[5].innerText == P || Box[6].innerText == P & Box[7].innerText == P & Box[8].innerText == P) {
      GameWin_Not=true;
      EndGame();
      res.innerText=`Player ${P} Won`
      
      
    }

    //vertical Check
    if (Box[0].innerText == P & Box[3].innerText == P & Box[6].innerText == P || Box[1].innerText == P & Box[4].innerText == P & Box[7].innerText == P || Box[2].innerText == P & Box[5].innerText == P & Box[8].innerText == P) {
      GameWin_Not=true;
      EndGame();
      res.innerText=`Player ${P} Won`
    }
    
    //Digonal Check
    if(Box[0].innerText == P & Box[4].innerText == P & Box[8].innerText == P || Box[2].innerText == P & Box[4].innerText == P & Box[6].innerText == P ){
      GameWin_Not=true;
      EndGame();
      res.innerText=`Player ${P} Won`
    }
    
    //DrawCheck
    else if(DrawCheck.length>=8 & GameWin_Not==false){
      EndGame();
      return 0;
    }
  }
  
 DrawCheck.push(P)
 
  if (GameWin_Not==true) {
    res.style.opacity="1"
    return 1;
  }
 
}



function Put_x_o() {

  let Span = document.createElement("span")

  Span.innerHTML = player;

  let BoxId = this.id;

  document.getElementById(BoxId).appendChild(Span);


  RemoveEvent(BoxId);

  let ch=CheckWin(player);

  if (player === 'X') {
    Span.className = "xplayer"
    player = 'O'
  }
  else {
    Span.className = "yplayer"
    player = 'X'
  }
 
 chnc.innerText=`Player ${player} Chance`
 
 
 if(ch==1){
   chnc.innerText=`Congratulations!`
   btnrest.style.display="block"
 }
 if(ch==0){ 
   chnc.innerText="Match Drawn!"
   btnrest.style.display="block"
 }
 
}


Box.forEach((e) => {
  e.addEventListener("click", Put_x_o)
})


function reset(){
  Box.forEach((e)=>{
    e.innerHTML=""
    e.addEventListener("click",Put_x_o)
    e.classList.remove("winbox")
  })
  GameWin_Not=false;
  DrawCheck=[];
  res.style.opacity="0"
  chnc.innerText="Player  Chance"
  btnrest.style.display="none"
}


btnrest.addEventListener("click",reset);