const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve frontend files
app.use(express.json());

// Command to control the Minecraft server
const commands = {
    start: 'screen -dmS minecraft java -Xmx2G -Xms2G -jar server.jar nogui',
    stop: 'screen -S minecraft -X stuff "stop\n"',
    restart: 'screen -S minecraft -X stuff "stop\n"; sleep 5; screen -dmS minecraft java -Xmx2G -Xms2G -jar server.jar nogui'
};

// Handle Start, Stop, Restart
app.post('/server/:action', (req, res) => {
    const action = req.params.action;
    if (!commands[action]) return res.status(400).send('Invalid action');

    exec(commands[action], (error, stdout, stderr) => {
        if (error) return res.status(500).send(stderr);
        res.send(`Server ${action}ed successfully!`);
    });
});

// Get Minecraft Logs
app.get('/logs', (req, res) => {
    exec('tail -n 20 logs/latest.log', (error, stdout, stderr) => {
        if (error) return res.status(500).send(stderr);
        res.send(stdout);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Minecraft Panel Backend running on http://your-vps-ip:${PORT}`);
});
