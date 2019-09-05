const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, "../public");
const port = process.env.port || 3000;

app.use(express.static(publicDirectoryPath));

var count = 0;
io.on('connection', (socket) => {
    console.log("New Websocket connection...");

    socket.emit('countUpdated', count);
    socket.on("increment", () => {
        count++;
        //socket.emit('countUpdated', count);
        io.emit('countUpdated', count);
    })
});

server.listen(port, () => {
    console.log('Server is running on port ' + port + "!");
});