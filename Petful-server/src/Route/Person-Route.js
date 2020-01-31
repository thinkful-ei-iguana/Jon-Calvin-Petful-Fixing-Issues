const express = require("express");
const app = express();
const peopleExpress = express.Router();
const port = 8080;
const peopleList = require("../Data/People-Data");

peopleExpress.get("/", (req, res, next) => {
  return res.json(peopleList);
});

peopleExpress.delete("/", (req, res, next) => {
  peopleList.dequeue();
  return res.status(204).json(peopleList.first);
});

peopleExpress;

module.exports = peopleExpress;
