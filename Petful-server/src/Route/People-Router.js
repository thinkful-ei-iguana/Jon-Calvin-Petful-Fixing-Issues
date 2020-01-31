const peopleList = [
    {
      name: '',
      age: ''
    },
    {
      name: '',
      age: ''
    },
    {
      name: '',
      age: ''
    },
    {
      name: '',
      age: ''
    }
  ];
  
  const express = require('express');
  const peopleRouter = express.Router();
  
  peopleRouter.get('/new-person', (req, res, next) => {
  
      let newPerson = 
      return res.json(newPerson)
  })