// Establish an element to use for game
let counter = 0;
let currentPlayer = "X";
let gameMoves = ["", "", "", "", "", "", "", "", ""];

const resetBtn = document.querySelector("#game-reset");
const game = document.querySelector("#game-container"); 
const square = document.querySelectorAll(".square");

// resetBtn.addEventListener(`click`, resetGame);


// function resetGame() {
//     gameMoves = ["", "", "", "", "", "", "", "", ""];
//     currentPlayer = "X";
//     counter = 0;
//     console.log(resetGame);
//     squares.forEach((square) => {
//         square.innerHTML = "";
//         square.addEventListener("click", square, {once: true });
//     });
// }

// function squareEventListener() {
//     gameMoves[this.add] = currentPlayer;
//     counter++;
//     winLogic();
//     // console.log(gameMoves);
//     this.innerHTML = currentPlayer;
//     if(currentPlayer === "X") {
//         currentPlayer = "O";
//     }else {
//         currentPlayer = "X";
//     }
// }

function winner(game) {
    for (let i=0; i<3; ++i) {
        if (square[i].state != ""
        && square[i].state == square[i+3].state
        && square[i].state == square[i+6].state)
        return true;
    }
        if (square[i*3].state != ""
        && square[i*3].state == square[i*3+1].state
        && square[i*3].state == square[i*3+2].state)
        return true
        console.log(winner)
}


    if (gameMoves[0] === gameMoves[1] && gameMoves[1] === gameMoves[2] && gameMoves[0] !== "") {
        game.innerHTML = `${currentPlayer} is winner for row 1`;

    }
