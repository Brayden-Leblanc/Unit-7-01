// Connect the "Guess" button to a "random" function
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

// Get the number typed in by the user, then convert it into an integer
function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // Generate a random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // Compare user's guess with a random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You win! You guessed the number.'
  }
}
