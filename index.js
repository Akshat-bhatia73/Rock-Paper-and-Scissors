//All constant variables
const input = document.getElementsByClassName("input");
const playerScoreBoard = document.getElementById("playerScore");
const compScoreBoard = document.getElementById("compScore");
const choices = ["Rock", "Paper", "Scissor"];

//scoreVariables
let playerScore = 0;
let compScore = 0;

//Adding event listeners to all the buttons
for (let i=0; i<input.length; i++) {
    input[i].addEventListener("click", function() {
        const playerChoice = input[i].getAttribute("id");
        rockPaperScissor(playerChoice);
    })
}

//Main game logic
function rockPaperScissor(playerhoice) {
    let playerChoice = playerhoice;
    let heading = document.getElementById("heading");
    let computerChoice = choices[Math.floor(Math.random()*3)];
    
    switch (playerChoice + computerChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            playerScore++;
            heading.innerHTML = "You won! You chose: " + playerChoice + " Computer chose: " + computerChoice;
            playerScoreBoard.innerHTML = playerScore;
            break;
            
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            compScore++;
            heading.innerHTML = "You lost! You chose: " + playerChoice + " Computer chose: " + computerChoice;
            compScoreBoard.innerHTML = compScore;
            break;
            
        default:
            heading.innerHTML = "It's a tie. You both chose " + playerChoice;
            break;
    }

}