// Establish an element to use for game
let counter = 0;
let currentPlayer = "X";
let gameMoves = ["", "", "", "", "", "", "", "", ""];

const resetBtn = document.querySelector("#game-reset");
const game = document.querySelector("#game-container"); 
const square = document.querySelectorAll(".square");

resetBtn.addEventListener(`click`, resetGame);


function resetGame() {
    gameMoves = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    counter = 0;
    console.log(resetGame);
    squares.forEach((square) => {
        square.innerHTML = "";
        square.addEventListener("click", square, {once: true });
    });
}

function squareEventListener() {
    gameMoves[this.add] = currentPlayer;
    counter++;
    winLogic();
    // console.log(gameMoves);
    this.innerHTML = currentPlayer;
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }else {
        currentPlayer = "X";
    }
}

function winLogic() {
    if (gameMoves[0] === gameMoves[1] && gameMoves[1] === gameMoves[2] && gameMoves[0] !== "") {

    }
}