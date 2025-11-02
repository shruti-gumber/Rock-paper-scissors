let userScore = 0;//keep track
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");//paragraph element


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() *3);//less than 3 values generate hongi point mei, usko decimal krne ke liye use floor function
    return options[randomIdx];
};

const draw = ()=> {
    msg.innerText = "Game was a draw. Play again";
    msg.style.backgroundColor = "#b2f7ef";
}

const showWinner = (userChoice, compChoice, userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";  
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        draw();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //comp ki either paper or scissor
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //comp ki either rock or scissor
            userWin = compChoice==="scissors" ? false : true;
        }else{
            //user ki h scissors
            userWin = compChoice==="rock" ? false : true;
        }

        showWinner(userChoice, compChoice, userWin);
    }
};
choices.forEach((choice) => 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
);