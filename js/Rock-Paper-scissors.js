//create selectors for rock scissors paper buttons
const btn = document.querySelectorAll(".btn")
//create selector for result output textarea 
const result = document.getElementById("txt")

//create selector for scoreboard
const playerScore = document.getElementById("playerScore")
const pcScore = document.getElementById("pcScore")

// handles gamerestart
//const playAgain = document.getElementsByid("playAgain")

/*function restartGame(){
    playAgain.addEventListener('click',() =>{
        button.reload();
    });
}*/

//creates a random pc choice 
function getComputerChoice(){
let arr =["Rock","Paper","Scissors"]
return arr[Math.floor(Math.random()*arr.length)]
}``

//handles click events for player imput
btn.forEach((button) => {button.addEventListener("click", getPlayerChoice)})

function getPlayerChoice(e){
    let playerselection = e.target.id ;
    gameRound(playerselection,getComputerChoice())
}

//creates and stores scores for both players 
let pcBoard = 0 
let playerBoard = 0

//plays a round comparing the user choice vs the pc choice and return it as a textcontent, also modifie scoreboards
function gameRound(playerSelection,computerSelection){
    let player = playerSelection
    let computer = computerSelection

    if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" ||  player === "Scissors" && computer === "Paper") {
        result.textContent = 'you win'
        playerScore.textContent = ++playerBoard ; 
    }else if (player === "Scissors" && computer === "Rock" || player === "Rock" && computer === "Paper"|| player === "Paper" && computer === "Scissors" ) {
        result.textContent = "you lose" ;
        pcScore.textContent = ++pcBoard ; 
    }else {
        result.textContent = "it's a tie"
    }
    selectWinner()
}
// checks the scoreboard if one of the players reachs 5 the game ends and disables the buttons
function selectWinner(){
    if (pcBoard == 5 || playerBoard == 5){
        if(playerBoard == 5){
            result.textContent = "you won the game !!!";
        }else if(pcBoard == 5){
            result.textContent = "You lost to the pc !!"
        }
        btn.forEach(button => {button.removeEventListener('click',getPlayerChoice)})

    }
}