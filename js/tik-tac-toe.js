
function getComputerChoice(){
let arr =["Rock","Paper","scissors"]
return arr[Math.floor(Math.random()*arr.length)]
}

function gameRound(playerSelection,computerSelection){
    let player = playerSelection
    let computer = computerSelection

    if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" ||  player === "Scissors" && computer === "Paper") {
        return "you win"
    }else if (player === "Scissors" && computer === "Rock" || player === "Rock" && computer === "Paper"|| player === "Paper" && computer === "Scissors" ) {
        return  "you lose"
    }else {
        return "it is a tie "
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let pc = getComputerChoice()
        let user = prompt("pick Rock, Paper or Scissors")
        console.log(gameRound(user,pc))
    }
}
game()