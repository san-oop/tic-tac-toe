require('dotenv').config();
const cors = require('cors');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
    },
});

io.on('connection', (socket) => {
    console.log('a user connected');
    if (io.engine.clientsCount > 2) { // To limit to 2 players per game
        socket.emit('err', { message: 'reached the max limit of connections' });
        socket.disconnect();
        console.log('Disconnected...');
        return;
    }
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('currentMove', (msg) => {
        console.log(`message: ${msg}`);
        io.emit('updateMoves', msg);
    });

    socket.on('restart', () => {
        console.log('Restarted');
        io.emit('restart');
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Engine listening on port ${process.env.PORT}`);
});
