const express = require("express");
const app = express();
const catExpress = express.Router();
const port = 8080;
const catList = require("../Data/Cat-Data");

catExpress.get("/", (req, res, next) => {
  if (catList.first === null)
    res.status(404).send("Sorry, no more cats available");
  else {
    return res.json(catList.first.value);
  }
});

catExpress.delete("/remove", (req, res, next) => {
  catList.dequeue();
  return res.status(204).json(catList.first);
});

catExpress;

module.exports = catExpress;
