const express = require('express'); 
const helmet = require('helmet');

// Import Routers
const projectRouter = require('../data/helpers/projectsRouter');
const actionRouter = require('../data/helpers/actionsRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

server.get('/', (req, res) => {
    res.send('<h1>Sanity == Good</h1>');
});

module.exports = server;