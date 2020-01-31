const express = require("express");
const app = express();
const peopleExpress = express.Router();
const port = 8080;
const peopleList = require("../Data/People-Data");

peopleExpress.get("/", (req, res, next) => {
  res.json(peopleList);
});

peopleExpress;

module.exports = peopleExpress;
