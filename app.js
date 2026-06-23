let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx]
}


const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});


const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "darksalmon";
    console.log("Game Draw")
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Win");
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        console.log("You lose");
    }
}

