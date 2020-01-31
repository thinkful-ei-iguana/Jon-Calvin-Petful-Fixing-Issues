const express = require('express')
const app = express()
const dogExpress = express.Router();
const port = 8080
const dogList = require('../Data/Dog-Data');

dogExpress.get('/', (req, res, next) => {
  res.json(dogList);
});

dogExpress;

module.exports = dogExpress;