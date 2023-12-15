let sum=0;
let buttons = document.querySelectorAll("button");
let screen = document.getElementsByClassName("screen")[0];
let pcs=document.getElementById("process")
let string = "";
let arr = Array.from(buttons);
let Value=[];
let count=0;
arr.forEach(button => {
  button.addEventListener("click", function(e) {
    if (e.target.innerHTML === "=") {
     count+=1;
     if(count<=1){
      Value.push(screen.innerHTML)
      pcs.innerHTML=Value;
      
      try {
      
          string = eval(string);
          let div = document.createElement("div")
          div.className = "div"
          div.innerHTML = string;
          screen.appendChild(div)
        
        
        
      } catch {
        window.alert("Value Not Defined!")
      }
      
     Value=[];
     }else{
       return;
     }
    }
    else if (e.target.innerHTML === "AC") {
      string = " ";
      
      screen.innerHTML = string;
    }
    else if (e.target.innerHTML === "DEL") {
      try {
        string = string.substring(0, string.length - 1);
        screen.innerHTML = string;
      } catch (error) {

      }
    }
    else if(e.target.innerHTML==="x²"){
      try{
      count=1;
      string= Math.pow(screen.innerHTML,2);
      let div=document.createElement("div")
      div.className="div"
      div.innerHTML=string;
      screen.append(div);
      }catch{}
    }
    else {
      count=0;
      string += e.target.innerHTML;
      screen.innerHTML = string;
      
    }

  });
})
