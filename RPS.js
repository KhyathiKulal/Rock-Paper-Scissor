//variables
let userScore = 0;
let compScore = 0;

//selection of objects
let msg = document.querySelector(".msg");
let result = document.querySelector(".result");
const choices = document.querySelectorAll(".choice");
let computer = document.querySelector(".comp");
let user = document.querySelector(".user");

//----------------------------------------------
// functions
// ---------------------------------------------

//to know the computers choice
const compChoice = () =>{
    //computer choice
    let opt = ['rock', 'paper', 'scissors'];
    const i = Math.floor(Math.random()*3); //*3 is done to get below 3 and floor function is for integer number
    return opt[i];
}

//if user or computer win
const showWinner = (uw,uc,cc) =>{
    if(uw){
        msg.innerText = `You Win 😍 Your ${uc} beats ${cc}`;
        userScore++;
        msg.classList.remove("loose");
        msg.classList.remove("draw");
        msg.classList.add("win");
        user.innerText = `${userScore}`; //can write lis ths also or direct the variable name since it is a integer
    }
    else{
        msg.innerText = `You Lost 😒${cc} beats your ${uc}`;
        compScore++;
        msg.classList.remove("win");
        msg.classList.remove("draw");
        msg.classList.add("loose");
        computer.innerText = compScore;
    }
}

//if draw
const draw = () => {
    msg.innerText = "Game was Draw !!";
    compScore++;
    userScore++;
    msg.classList.remove("win");
    msg.classList.remove("loose");
    msg.classList.add("draw");
    user.innerText = userScore;
    computer.innerText = compScore;
}

//checking who is the winner
const DrawOrNot = (u,c) =>{
    if(u === c){
        draw();
    }else{
        let userWin = true;
        if(u ==="rock"){
            userWin = c ==="paper" ? false: true;
        }else if(u==="paper"){
            userWin = c ==="scissors" ? false: true;
        }
        else{
            userWin = c ==="rock" ? false: true;
        }
        showWinner(userWin,u,c);
    }
}

//-----------------------------------------------------------
//adding event listener for user choice
choices.forEach(choice =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id"); //to check which choice was clicked
        console.log("click hua :"+ userChoice);
        const computerChoice = compChoice();
        console.log("click hua :"+ computerChoice);
        DrawOrNot(userChoice,computerChoice);    
    });
});