function sendCommand(command) {
    fetch(`/server/${command}`, { method: 'POST' })
        .then(response => response.text())
        .then(data => {
            document.getElementById("console").innerHTML += `[Server]: ${data}\n`;
        })
        .catch(err => console.error("Error:", err));
}

function fetchLogs() {
    fetch('/logs')
        .then(response => response.text())
        .then(logs => {
            document.getElementById("console").innerHTML = logs;
            document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
        });
}

setInterval(fetchLogs, 3000); // Fetch logs every 3 seconds
