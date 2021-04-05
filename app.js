let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById('your-choice')
const possibleChoices = document.querySelectorAll('.choices')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>
{
    userChosen = e.target.id 
    generatedComputerChoice()
    results()
    userChoice.innerHTML = userChosen
    computerChoice.innerHTML = computerChosen
    displayResult.innerHTML = result
} ))

//get userCHosen

//get a random computer choices
function generatedComputerChoice()
{
    if (randomNumber === 1)
    {
        return computerChosen = 'rock'
    } 
    else if (randomNumber === 2)
    {
        return computerChosen = 'paper'
    }
    else if (randomNumber === 3)
    {
        return computerChosen = 'scissors'
    }
}

//get Results
function results()
{
    if(computerChosen === userChosen)
    {
        return result = 'it is a Tie!'
    } 
    else if ( computerChosen === 'rock' && userChosen === 'paper')
        {
            return result = 'You win! You Dev-Feated Danny Devito! Refresh page to play again.'
    } 
    else if ( computerChosen === 'rock' && userChosen === 'scissors')
        {
            return result = 'Oh no! You just got Danny Dev-FEATED! Refresh page to play again.'
        }
    else if ( computerChosen === 'paper' && userChosen === 'rock')
        {
            return result = 'Oh no! You just got Danny Dev-FEATED! Refresh page to play again.'
        }
    else if ( computerChosen === 'paper' && userChosen === 'scissors')
        {
            return result = 'You win! You Dev-Feated Danny Devito! Refresh page to play again.'
        }
    else if ( computerChosen === 'scissors' && userChosen === 'rock')
        {
            return result = 'You win! You Dev-Feated Danny Devito! Refresh page to play again.'
        }
    else if ( computerChosen === 'scissors' && userChosen === 'paper')
        {
            return result = 'Oh no! You just got Danny Dev-FEATED! Refresh page to play again.'
        }
}
