const d = document;
const square = d.querySelectorAll(".square");
const sc = d.getElementById("score");
const t = d.getElementById("time")
const btn=d.getElementById("btn")
let btnState=false;

let score = 0;

let prev_id = null;

function check() {
  
  if (prev_id != null) document.getElementById(prev_id).classList.remove("whac_touch")
  
  let id = this.id;
  
  if (this.className === 'square mole') {
    score += 1;
    sc.innerText = "Score : " + score;
    document.getElementById(id).classList.add("whac_touch")
    prev_id = id;
  }
}


square.forEach((e) => {
  e.addEventListener("click", check)
})


let time = 60;




async function update() {
  
  setTimeout(() => {
    time -= 1;
  }, 1000)

  t.innerText = "Time : " + time;

  let i =  Math.floor(Math.random() * 9) + 1

  try {
    await square[i].classList.add("mole")
  } catch {}


  setTimeout(async () => {
    try {
      await square[i].classList.remove("mole")
    } catch {}
  },440)

  if (time === 0){
    btn.style.display="block"
    btnState=true;
    clearInterval(up);
  }

}

btn.style.display="none"

let up = setInterval(update, 750)

btn.addEventListener("click",()=>{
  if(btnState){
  time=60
  score=0;
  up=setInterval(update, 850);
  btnState=false;
  btn.style.display="none"
  }
})