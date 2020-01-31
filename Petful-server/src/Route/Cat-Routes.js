const express = require('express')
const app = express()
const catExpress = express.Router();
const port = 8080
const catList = require('../Data/Cat-Data');

catExpress.get('/', (req, res, next) => {
  res.json(catList);
});

catExpress;

module.exports = catExpress;