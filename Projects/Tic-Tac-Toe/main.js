let btn= document.querySelector("button")
let select=document.getElementById("select")
let scrn=document.querySelectorAll(".inp");
let res=document.getElementById("result")
let turn=document.getElementById("turn")
let arr= Array.from(scrn)
let player="X"

function draw(play){
  

  
  if( scrn[0].innerHTML!="" && scrn[1].innerHTML!="" && scrn[2].innerHTML!="" && scrn[3].innerHTML!= ""&& scrn[4].innerHTML!="" && scrn[5].innerHTML!="" && scrn[6].innerHTML!="" && scrn[7].innerHTML!="" && scrn[8].innerHTML!="" && scrn[0].style.color!="red"){
     
   res.innerHTML="MATCH DRAWN!"
   
   
 }
}
 
let checkwin=(e,play)=>{
  
  if( scrn[6].innerHTML==play && scrn[7].innerHTML==play && scrn[8].innerHTML==play ||
    scrn[3].innerHTML==play && scrn[4].innerHTML==play && scrn[5].innerHTML==play ||
    scrn[2].innerHTML==play && scrn[4].innerHTML==play && scrn[6].innerHTML==play ||
    scrn[0].innerHTML==play && scrn[4].innerHTML==play && scrn[8].innerHTML==play ||
    scrn[0].innerHTML==play && scrn[1].innerHTML==play && scrn[2].innerHTML==play || scrn[0].innerHTML==play && scrn[3].innerHTML==play && scrn[6].innerHTML==play  || scrn[1].innerHTML==play && scrn[4].innerHTML==play && scrn[7].innerHTML==play  || scrn[2].innerHTML==play && scrn[5].innerHTML==play && scrn[8].innerHTML==play ){
    
   res.innerHTML=`PLAYER ${play} WIN!`;
   turn.innerHTML="RESET TO PLAY AGAIN!"
   
   for(var i=0;i<arr.length;++i){
     scrn[i].style.color="red"
   scrn[i].innerHTML=play
   }

 }
  
   draw(e)

}


arr.forEach(inp=>{
  inp.addEventListener("click",(e)=>{
    let b=e.target
    let c=e.target.innerHTML
    let a = e.target.innerHTML=player
    
    if(c=="X"){
      e.target.innerHTML="X"
       player=c
       
    }
    
    else if(c=="O"){
      e.target.innerHTML="O"
     player=c
    
    }

  
    checkwin(a,player)
     
    
    if (player=="X") {
      player="O"
    }
    else{
      player="X"
    }
    
    
    
  
    
  turn.innerHTML=`PLAYER ${player} TURN!`
    
    
    })
})




function rest(){
  for(var i=0;i<arr.length;++i){
     scrn[i].style.color="rgba(87, 69, 10, 1)"
   scrn[i].innerHTML=""
  }
  turn.innerHTML="PLAYER TURNS"
  res.innerHTML="RESULT"
}


select.onchange=()=>{
if (select.value==="1") {
  btn.classList.remove("btn3")
  btn.classList.remove("btn2")
  for(var i=0;i<scrn.length;++i){
  scrn[i].className="inp"
  btn.classList.remove("btn1")
}
}
else if(select.value==="2"){
  btn.classList.remove("btn2")
  btn.classList.remove("btn3")
  btn.classList.add("btn1")
  for(var i=0;i<scrn.length;++i){
      scrn[i].classList.remove("board4")
  scrn[i].classList.remove("board3")
  scrn[i].classList.add("board2")
}
}
else if(select.value==="3"){
  btn.classList.remove("btn3")
  btn.classList.add("btn2")
for(var i=0;i<scrn.length;++i){
  scrn[i].classList.remove("board4")
  scrn[i].classList.add("board3") 
}
}
else if(select.value==="4"){
  btn.classList.add("btn3")
for(var i=0;i<scrn.length;++i){
  scrn[i].classList.add("board4") 
}
}
}

