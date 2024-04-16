const options = ['rock', 'paper', 'sissors']

function getComputerChoice () {
    let random = Math.floor(Math.random()*options.length)
    return options[random]
}

const playerChoice = prompt('RPS?')

function rps (computer, player) {
    computer = getComputerChoice()
    player= playerChoice
    console.log(computer, player)
    if (computer === 'sissors' & player === 'rock' || computer === 'rock' & player === 'paper' || computer === 'paper' & player === 'sissors') {
        return console.log('You win')
    } else if (computer == 'rock' & player === 'sissors' || computer === 'paper' & player === 'rock' || computer === 'sissors' & player === 'paper') {
        return console.log('You lose')
    }
}

rps()