// Update Clock
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds;
}
setInterval(updateClock, 1000);
updateClock();

// Infinite Red Cube Rain Generator
function createRain() {
    setInterval(() => {
        const rainContainer = document.getElementById('rain');
        let cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.left = Math.random() * 100 + 'vw';
        cube.style.animationDuration = (Math.random() * 6 + 5) + 's';
        rainContainer.appendChild(cube);
        cube.addEventListener("animationend", function() {
            cube.remove();
        });
    }, 100);
}

createRain();