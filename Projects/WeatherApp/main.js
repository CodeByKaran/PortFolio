  let li=document.querySelectorAll("li");
  let search=document.getElementById("search")
  let speed=document.getElementById("speed")
  let head=document.getElementById("head")
  let text=document.getElementById("text")
  let btn=document.getElementById("submit")
  let arr=Array.from(li);
  arr.forEach(li =>{
    li.addEventListener("click",(e)=>{
      search.value=e.target.innerHTML;
    })
  })
  
  const appid="61fa3712f3218fcb731efe8d5de702ca"
  
  const appurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
  
async function check(place){
  let img=document.querySelector("#img")
  
  try {
    
  let data= await fetch(appurl+place+`&appid=${appid}`)
  
  let result= await data.json()

  head.innerHTML=result.name;
   text.innerHTML=result.weather[0].main
  document.getElementById("temp").innerHTML=Math.round(result.main.temp)+"°C";
  
  speed.innerHTML=Math.round(result.wind.speed)+"km/hr";
  
  let chng=result.weather[0].main

  if(chng=="Mist" || chng=="Haze"){
  img.src="mist.png"
  }
  
  else if(chng=="Clear"){
    img.src="clear.png"
  }
  else if(chng=="Fog" || chng=="Smoke"){
    img.src="fog.png"
  }
  else if(chng=="Rain"){
    img.src="rain.png"
  }
  
  else if(chng=="Clouds"){
    img.src="clouds.png"
  }
  
  else if (chng=="drizzle"){
    img.src="drizzle.png"
  }
  
  else if(chng=="Snow"){
    img.src="snow.png"
  }
  
  search.value=""
  
  } catch(e){
   window.alert(`${place} is not valid city!`)
  search.value=""
}

}
document.getElementById("submit").addEventListener("click",(e)=>{
  e.preventDefault()
  let search=document.getElementById("search")
  
  let city= search.value
  if(city===""){
     btn.disable=true;
    window.alert('Enter City Name..');
  }
  else{
  check(city)
  }
})

window.onload=()=>{
  check("patna");
}
