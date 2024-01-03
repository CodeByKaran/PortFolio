import {countries} from "./List.js"


function dayMonth(mon){
  switch (mon) {
   case 0:
     return "January"
     break
   case 1:
     return "February"
   break
   case 2:
     return "March"
   break
   case 3:
     return "April"
   break
   case 4:
     return "May"
   break
   case 5:
     return "June"
   break
   case 6:
     return "July"
   break
   case 7:
     return "August"
   break
   case 8:
     return "September"
   break
   case 9:
     return "October"
   break
   case 10:
     return "November"
   break
   case 11:
     return "December"
   break
  }
}


function cur_time(city,offset){
  
  let d= new Date
  
  let utc= d.getTime() + (d.getTimezoneOffset()*60000)
  
  let date= new Date(utc+(offset*3600000))
  
  
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var sec=date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ' : ' + minutes +' : '+ sec + ' ' + ampm;
  
  let c_day=date.getDate();
  let c_mon=dayMonth(date.getMonth());
  let c_year=date.getFullYear();
  
  
  let c_d = c_day + '  ' + c_mon +' ' + c_year;
  
  
  return {strTime,c_d};
}

const select=document.getElementById("country");


countries.forEach((e,i)=>{
  let option=document.createElement("option")
  option.innerHTML=e.name;
  option.className=`opt`
  option.value=e.timezone_offset;
  select.appendChild(option);
})




let option=document.querySelectorAll(".opt");

const d_show=document.getElementById("D_show")

const t_show=document.getElementById("T_show")


let a=select.onchange=()=>{
  
  setInterval(()=>{
  
  d_show.innerHTML="";
  t_show.innerHTML="";


  let v=select.value;
  let c_n="";
  
  countries.forEach((e)=>{
    if (e.timezone_offset==v) {
      c_n=e.name;
    }
  })
  
  let localTime=cur_time(c_n,v)
  
    d_show.insertAdjacentText("beforeend",localTime.strTime)
    
    
    t_show.innerText=localTime.c_d;
    
  },1000)
  
}


window.onload=()=>{
  a()
}