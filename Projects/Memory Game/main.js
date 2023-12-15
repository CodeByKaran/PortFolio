const ArrayOfData = [
  {
    name: "cake1",
    img: "./Images/cake1.png"
},
  {
    name: "cake2",
    img: "./Images/cake2.png"
  },
  {
    name: "cake3",
    img: "./Images/cake3.png"
},
  {
    name: "cake4",
    img: "./Images/cake4.png"
},
  {
    name: "cake5",
    img: "./Images/cake5.png"
},
  {
    name: "cake6",
    img: "./Images/cake6.png"
},
  {
    name: "cake7",
    img: "./Images/cake7.png"
},
  {
    name: "cake8",
    img: "./Images/cake8.png"
  },
  {
    name: "cake9",
    img: "./Images/cake8.png"
},
  {
    name: "cake10",
    img: "./Images/cake10.png"
},
  {
    name: "cake11",
    img: "./Images/cake11.png"
},
  {
    name: "cake12",
    img: "./Images/cake12.png"
},

//duplicate 

  {
    name: "cake1",
    img: "./Images/cake1.png"
},
  {
    name: "cake2",
    img: "./Images/cake2.png"
  },
  {
    name: "cake3",
    img: "./Images/cake3.png"
},
  {
    name: "cake4",
    img: "./Images/cake4.png"
},
  {
    name: "cake5",
    img: "./Images/cake5.png"
},
  {
    name: "cake6",
    img: "./Images/cake6.png"
},
  {
    name: "cake7",
    img: "./Images/cake7.png"
},
  {
    name: "cake8",
    img: "./Images/cake8.png"
  },
  {
    name: "cake9",
    img: "./Images/cake8.png"
},
  {
    name: "cake10",
    img: "./Images/cake10.png"
},
  {
    name: "cake11",
    img: "./Images/cake11.png"
},
  {
    name: "cake12",
    img: "./Images/cake12.png"
},
]


ArrayOfData.sort(() => 0.5 - Math.random())

let root = document.getElementById("root");
let notry = document.getElementById("no_of_try")
let score = document.getElementById("score");

let ChoosenBox = [];
let choosenId = [];
let CardWon = [];

function CreateBoard() {
  ArrayOfData.forEach((elm, i) => {

    let image = document.createElement("img")

    image.src = "./Images/Blank.png"

    image.setAttribute("data_id", i)


    image.classList.add("span_box");
    image.classList.add("img")

    image.addEventListener("click", boxClick)

    root.appendChild(image);
  })
}

CreateBoard()


let chance = 0;
let sc = 0;

function checkMatch() {
  chance += 1;
  notry.innerHTML = `Chance : ${chance}`

  const img = document.querySelectorAll("img");

  let option1 = choosenId[0];
  let option2 = choosenId[1];

  

  if (option1 == option2) {
    chance-=1;
    ChoosenBox[0] = "jsj"
    choosenId[0] = "72"
  }
  


  if (ChoosenBox[0] == ChoosenBox[1]) {
    sc += 1;
    score.innerHTML = `Score : ${sc}`;
   ArrayOfData[option1].won=true;
   ArrayOfData[option2].won=true;
   
    img[option1].setAttribute("src", "./Images/Won.jpeg");
    img[option2].setAttribute("src", "./Images/Won.jpeg");
    CardWon.push(ArrayOfData[option1].name)
    img[option1].removeEventListener("click", boxClick)
    img[option2].removeEventListener("click", boxClick)
  }
  
  if (CardWon.length == 12) {
   alert("Congratulations You Discovered All Peice.")
     CardWon=[]
     
    setTimeout(location.reload(true) ,2500) 
  }

  ChoosenBox = [];
  choosenId = [];
  
  /*img[option1].setAttribute("src", "./Images/Blank.png")
  img[option2].setAttribute("src", "./Images/Blank.png")*/
}

function close(){
  
   ArrayOfData.forEach((e,i)=>{
     if(e.won==true){
     return
     }else{
       let img=document.querySelectorAll("img")
     img[i].setAttribute("src","./Images/Blank.png")
     }
   })
}

function boxClick() {

  const boxId = this.getAttribute("data_id");


  ChoosenBox.push(ArrayOfData[boxId].img)
  choosenId.push(boxId)

  this.setAttribute("src", ArrayOfData[boxId].img)

  if (ChoosenBox.length == 2) {
    setTimeout(() => {
      checkMatch();
      close();
    }, 600)
  }
}