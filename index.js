let boxGame = document.querySelectorAll(".box");
 let resetBtn = document.querySelector("#reset-btn");
 let newBtn = document.querySelector("#new-btn");
 let messageContainer =document.querySelector(".msg-container");
 let message = document.querySelector("#msg");
let turn0 = true;

 const winPatterns = [
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]

    const resetGame = ()=>{
        turn0 = true;
        enableBoxes();
        messageContainer.classList.add("hide");
    }
    boxGame.forEach ((box)=>{
        box.addEventListener("click", ()=>{
            console.log("button was clicked");
            if(turn0){
                box.innerText = "0";
                turn0 = false;
            }
            else{
                box.innerText = "X";
                turn0 = true;
            } box.disabled =true;
            checkWinner();
            
        });
     });
     const disableBoxes= () =>{
        for(let box of boxGame){
    box.disabled = true;
   }
     }
     const enableBoxes= () =>{
        for(let box of boxGame){
    box.disabled = false;
    box.innerText ="";
   }
     }
        const showWinner = (winner) =>{
            message.innerText=`Congratulations,Winner is ${winner}`;
            messageContainer.classList.remove("hide");
            disableBoxes();
        }
       
   
    const checkWinner = ()=> {
        for(let pattern of winPatterns){
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(boxGame[pattern[0]].innerText,
            //     boxGame[pattern[1]].innerText,
            //   
            let pos1val =  boxGame[pattern[0]].innerText;
            let pos2val =  boxGame[pattern[1]].innerText;
            let pos3val =  boxGame[pattern[2]].innerText;
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val==pos2val && pos2val == pos3val){
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
            
        }

        
    }
    newBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click",resetGame);