

/**Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! */

const computerOptions = ["rock", "paper", "scissors"];

function getComputersChoice(choice) {
    const computerChoice = Math.floor(Math.random() * choice.length);

    return choice[computerChoice];

}

console.log(getComputersChoice(computerOptions));
