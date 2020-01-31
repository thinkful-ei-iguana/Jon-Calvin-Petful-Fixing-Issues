const peopleList = [
    {
      name: 'Bethany',
      age: '3000'
    },
    {
      name: 'Calvin',
      age: '30'
    },
    {
      name: 'Mandee',
      age: '28'
    },
    {
      name: 'David',
      age: '27'
    }
    {
      name: 'Skyler',
      age: '50000'
    }
  ];
  
  const express = require('express');
  const peopleRouter = express.Router();
  
  peopleRouter.get('/new-person', (req, res, next) => {
  
      let newPerson = 
      return res.json(newPerson)
  })