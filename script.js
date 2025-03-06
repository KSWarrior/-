let playerPositions = { player1: 0, player2: 0 };
let currentPlayer = "player1";

document.getElementById("rollDice").addEventListener("click", function () {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceResult").innerText = `🎲 ${diceRoll}`;
    
    movePlayer(currentPlayer, diceRoll);
    checkWin(currentPlayer);
    switchTurn();
});

function movePlayer(player, steps) {
    playerPositions[player] += steps;
    
    if (playerPositions[player] > 23) {
        playerPositions[player] = 23;
    }

    let playerElement = document.getElementById(player);
    let cell = document.getElementById(`cell-${playerPositions[player]}`);
    
    playerElement.style.transform = `translate(${cell.offsetLeft}px, ${cell.offsetTop}px)`;
}

function switchTurn() {
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    document.getElementById("turnInfo").innerText = currentPlayer === "player1" ? "Player 1's Turn" : "Player 2's Turn";
}

function checkWin(player) {
    if (playerPositions[player] === 23) {
        alert(`${player === "player1" ? "Player 1 (Red)" : "Player 2 (Blue)"} Wins!`);
        resetGame();
    }
}

function resetGame() {
    playerPositions = { player1: 0, player2: 0 };
    currentPlayer = "player1";
    document.getElementById("turnInfo").innerText = "Player 1's Turn";
    document.getElementById("diceResult").innerText = "🎲";
    
    document.getElementById("player1").style.transform = "translate(0px, 0px)";
    document.getElementById("player2").style.transform = "translate(0px, 0px)";
}
