let players = [
    { name: "Player 1", position: 0, color: "red", tokenId: "token-red" },
    { name: "Player 2", position: 0, color: "blue", tokenId: "token-blue" }
];

let currentPlayerIndex = 0;

// Generate board cells
const board = document.querySelector(".cells");
for (let i = 0; i < 25; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;
    
    if (i === 0) cell.classList.add("start-red");
    if (i === 5) cell.classList.add("start-blue");
    if ([6, 12, 18].includes(i)) cell.classList.add("safe-zone");
    if (i === 24) cell.classList.add("finish");

    board.appendChild(cell);
}

// Dice rolling
document.getElementById("rollDice").addEventListener("click", function () {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceResult").innerText = `🎲 ${diceRoll}`;
    
    movePlayer(players[currentPlayerIndex], diceRoll);
    checkWin(players[currentPlayerIndex]);

    // Switch to next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateTurnInfo();
});

function movePlayer(player, steps) {
    player.position += steps;
    if (player.position > 24) player.position = 24; // Stop at the last position

    let token = document.getElementById(player.tokenId);
    let cell = document.getElementById(`cell-${player.position}`);

    token.style.left = `${cell.offsetLeft}px`;
    token.style.top = `${cell.offsetTop}px`;
}

function checkWin(player) {
    if (player.position === 24) {
        alert(`${player.name} Wins!`);
        resetGame();
    }
}

function updateTurnInfo() {
    document.getElementById("turnInfo").innerText = `${players[currentPlayerIndex].name}'s Turn`;
}

function resetGame() {
    players.forEach(player => player.position = 0);
    currentPlayerIndex = 0;
    document.getElementById("turnInfo").innerText = "Player 1's Turn";
}
