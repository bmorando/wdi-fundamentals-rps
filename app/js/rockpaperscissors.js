
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

///////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move
      if (move != null) {
          move = move;
      }
      else {
          move = getInput();
      }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var move
      if (move != null) {
          move = move;
      }
      else {
        move = randomPlay();
      }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("Computer Chose" + move)
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == "rock" && computerMove == "paper") {
      winner = "computer"
      console.log("Computer wins!");
    }
    else if(playerMove == "paper" && computerMove == "rock") {
      winner = "player"
      console.log("Player wins!");
    }
    else if(playerMove == "paper" && computerMove == "scissors") {
      winner = "computer"
      console.log("Computer wins!");
    }
    else if(playerMove == "scissors" && computerMove == "paper") {
      winner = "player"
      console.log("Player wins!");
    }
    else if(playerMove == "scissors" && computerMove == "rock") {
      winner = "computer"
      console.log("Computer wins!");
    }
    else if(playerMove == "rock" && computerMove == "scissors") {
      winner = "player"
      console.log("Player wins!");
    }
    else {
      winner = "tie"
      console.log("It's a tie!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var roundNum = 0;
    var winner;
    var wins = 5;

    while (playerWins < wins && computerWins < wins) {
        roundNum++;

        // initialise move
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

        // winner for current round
        winner = getWinner(playerMove, computerMove);
        if (winner === 'Player') {
            playerWins++;
        }
        else if (winner === 'Computer') {
            computerWins++;
        }
        else {
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log('Winner for round ' + roundNum + ' is ' + winner);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    // displays overall winner
    if (playerWins > computerWins) {
        console.log('Player wins!');
    }
    else {
        console.log('Computer wins!');
    }
    return [playerWins, computerWins];
}
playToFive();

