let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let msgcontenair=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let btn=document.querySelector(".new")
let turnO=true
let count=0
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was click")
        if(turnO){
            box.innerHTML="O"
            turnO=false
        }else
        {
            box.innerHTML="X"
            turnO=true
        }
        box.disabled=true
        count++
       let iswinner= checkwiner()
       if(count===9&& !iswinner){
        gamedraw();
       }
    })
})
const gamedraw=()=>{
    msg.innerText=`game was draw.`
    msgcontenair.classList.remove("hide")
    disbtn();
}
const resetgame=()=>{
   turnO=true
   count=0
   enbbtn();
   msgcontenair.classList.add("hide")
}
const disbtn=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const showWinner= (winner)=>{
    msg.innerHTML=  `Congratulation, Winner is ${winner}`
    msgcontenair.classList.remove("hide")
    disbtn()
}

const checkwiner=()=>{
    for(let pattern of arr){
      let pos1=boxes[pattern[0]].innerHTML;
      let pos2=boxes[pattern[1]].innerHTML;
      let pos3=boxes[pattern[2]].innerHTML;

      if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1==pos2 && pos1==pos3){
        
            showWinner(pos1)
            return true
        }
      }
    }
}
const enbbtn=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
btn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
