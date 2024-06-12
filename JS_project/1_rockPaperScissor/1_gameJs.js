let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const usersc = document.querySelector("#user-score");
const compsc = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again..";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        usersc.innerText = userScore;
        msg.innerText = `You are Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compsc.innerText = compScore;
        msg.innerText =  `You are lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user's choice", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else 
    {
        let userWin = true;     // we are assume here that user is win.

        if(userChoice === "rock")
        {
            // compChoice is  (paper or scissors)
            userWin = compChoice === "paper" ? false : true;
            // here, computer is win so, userwin = false
        }
        else if(userChoice === "paper")
        {
            // compChoice is  (rock or scissors)
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            // compChoice is  (rock or paper)
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userChoice = ch.getAttribute("id");
        // console.log(`choice ${choiceID} was clicked`);
        playgame(userChoice);
    });    
});