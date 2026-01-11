let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");

const winningConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    checkResult();
}

function checkResult() {
    for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.innerText = `Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = "Player X's Turn";

    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}

statusText.innerText = "Player X's Turn";
