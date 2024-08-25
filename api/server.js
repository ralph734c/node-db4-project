const express = require('express');

const RecipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'The API is running' });
});

module.exports = server;
