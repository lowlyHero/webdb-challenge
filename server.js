const express = require('express'); 

const projectRouter = require('./routes/projectRouter');
const actionRouter = require('./routes/actionRouter');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

server.get('/', (req, res) => {
    res.send('<h1>I\'m not insane</h1>');
});

module.exports = server;