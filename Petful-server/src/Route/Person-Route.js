const express = require("express");
const app = express();
const peopleExpress = express.Router();
const port = 8080;
const peopleList = require("../Data/People-Data");

peopleExpress.get("/", (req, res, next) => {
  return res.json(peopleList.first.value);
});

peopleExpress.delete("/", (req, res, next) => {
  peopleList.dequeue();
  return res.status(200).json(peopleList.first.value);
});

module.exports = peopleExpress;
