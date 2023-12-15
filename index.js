const d=document;
const menu=d.getElementById("menu");
const row = d.getElementsByClassName("row")[0],
box=row.querySelectorAll(".box")[0];
const scrlbtn=d.querySelectorAll(".btnc")



menu.addEventListener("click",(e)=>{

if(menu.classList.contains("tg")){
    menu.innerHTML="&#10006;"
    menu.classList.remove("tg")
}
else{
    menu.innerHTML="&#9776;"
    menu.classList.add("tg")
}
})


let dragState=false,prevpagex,scrollleft;

const dragstop=()=>{
    dragState=false;
}

const dragcheck=(e)=>{
    dragState=true;
    prevpagex=e.pageX
    scrollleft=row.scrollLeft;
}

const dragging=(e)=>{
    if(!dragState) return;
    e.preventDefault();
   let posdiff=e.pageX-prevpagex;
   row.scrollLeft=scrollleft-posdiff;
}

row.addEventListener("mousedown",dragcheck)
row.addEventListener("mousemove",dragging)
row.addEventListener("mouseleave",dragstop)

let boxwidth= box.clientWidth + 18;

scrlbtn.forEach((e)=>{
    e.addEventListener("click",()=>{
        row.scrollLeft += e.id == "scrlbtnL"?-boxwidth:boxwidth;
    })
})

