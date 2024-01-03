let h4=document.getElementsByTagName("h4")[0]
let p=document.getElementById("para")
let dropbtn=document.getElementById("menu")
let droplist=document.getElementById("list")

let button=document.getElementsByClassName("funbtn")


let modebtn=document.getElementById("outer");
let moderot=document.getElementById("inner");
let text=document.getElementById("textarea");
let cont=document.getElementById("cont")


let dropmenu=()=>{
  
  droplist.classList.toggle("height")
}

dropbtn.addEventListener("click",dropmenu);

cont.onclick=()=>{
  droplist.classList.remove("height")
}

let modechange=()=>{
document.body.classList.toggle("darkMode")
moderot.classList.toggle("rotateCircle")
}




function upper(){
  let value=text.value;
  let result=value.toUpperCase();
  text.value=result;
}

function lower(){
  let value=text.value;
  let result=value.toLowerCase();
  text.value=result;
}

function cl(){
  text.value=""
}



function copy(){
  text.select();
  window.navigator.clipboard.writeText(text.value);
}

function space(){

  let value = text.value;
  let result= value.replace(/\s{2,}/g, ' ').trim() 
  text.value=result;
}

function change(){
  setInterval(()=>{
let value=text.value;
  p.innerHTML=value;
  },100)
}

text.ondblclick=()=>{
  text.select();
}


let filec=0;

savebtn.addEventListener("click",(e)=>{

if(text.value!=""){
  filec+=1;
 const blob= new Blob([text.value],{type:"text/plain"})
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a")
 a.download=`file${filec}`
 a.href=url;
 a.click();
}
})

