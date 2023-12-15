let num= document.getElementById("num")
let from=document.getElementById("from")
let to= document.getElementById("to")
let show=document.getElementsByClassName("to")
let inpshow=document.getElementById("inpshow")
to.value=show[2].value

const tags={
  2:"binary",
  8:"octal",
  16:"hexadecimal",
  10:"decimal"
}


function log(){
  
  if ( from.value===to.value ) {
   num.style.border="1px solid red"
  }
  else if(inpshow.value==="NaN"){
    inpshow.value="";
  }
  else{
    num.style.border="1px solid black"
  let fromv= from.value
  let tov=to.value;
  if(inpshow.value==="NaN"){
    setTimeout(()=>{
    
    inpshow.value=`Enter ${tags[from.value]} Number`;
    },000)
    
    
  }
  inpshow.value=parseInt(num.value,fromv).toString(tov);
  }
}

num.onclick=()=>{
  
  if (from.value==="2" || from.value==="10" || from.value=="8") {
    
    num.setAttribute("type","number")
  }
  else{

    num.setAttribute("type","text")
  }
}


