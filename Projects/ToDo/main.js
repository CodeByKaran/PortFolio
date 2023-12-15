let input=document.getElementsByClassName("input")[0]
let ul=document.getElementsByClassName("ul")[0]
let close=document.getElementsByClassName("close")


function add(){
  let li_ln=document.getElementsByTagName("li")
  
  if (input.value==="") {
    window.alert("Enter Something!")
  }
  else{
  let txt=input.value
  let li=document.createElement("li")
  li.innerHTML=txt;
  ul.appendChild(li)
  
  
  let span=document.createElement("span")
  span.innerHTML="×"
  span.className="close"
  li.appendChild(span);


  
  
  }
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      
      var div = this.parentElement;
      div.style.display = "none";
    }
  
  }
  input.value=""
}

var list=document.querySelector("ul")
list.addEventListener("click",(e)=>{

  if (e.target.tagName==="LI") {
    e.target.classList.toggle("check")
  }
},false)



  
