const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();

const server = http.createServer(app);

const friendsArray = require('./db');

app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/friends', (req, res) => {
    res.send('This is my friends list');
});

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`);
});