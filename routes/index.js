const express = require('express');
const routes = express.Router();

const bookController = require('../controllers/bookController');

routes.get('/', (req, res) =>{
	res.send("hello  from node.js \n")
})

module.exports = routes;