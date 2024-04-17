const options = ['rock', 'paper', 'sissors']
let rounds = 0
let computerScore = 0
let playerScore = 0

function getComputerChoice () {
    let random = Math.floor(Math.random()*options.length)
    return options[random]
}

function reset () {
    rounds = 0
    computerScore = 0
    playerScore = 0
}

function playRound (computer, player) {
    const playerChoice = prompt('RPS?')
    computer = getComputerChoice()
    player = playerChoice.toLowerCase()
    if (computer === 'sissors' & player === 'rock' || computer === 'rock' & player === 'paper' || computer === 'paper' & player === 'sissors') {
        rounds++
        ++playerScore
        console.log('win')
        return `You win, ${player} beats ${computer}!`
    } else if (computer == 'rock' & player === 'sissors' || computer === 'paper' & player === 'rock' || computer === 'sissors' & player === 'paper') {
        ++computerScore
        rounds++
        console.log('lose')
        return `You lose, ${computer} beats ${player}!`
    } else if (computer === player) {
        rounds++
        console.log('tie')
        return 'Its a tie!'
    } else {
        return 'Invalid Input'
    }
}

function playGame () {
    while (rounds<5) {
        playRound()
    }

    if (computerScore > playerScore) {
        reset()
        return console.log('you lose')
    } else if (playerScore > computerScore) {
        reset()
        return console.log('you win')
    } else {
        reset()
        return console.log('tie')
    }
}


playGame()