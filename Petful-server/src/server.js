const express = require('express');
const cors = require('cors');
const dogExpress = require('./Route/Dog-Routes');
const catExpress = require('./Route/Cat-Routes');
const peopleExpress = require('./Route/Person-Route');
const instantiateLists = require('./Data/Create-Pet-Lists');

// const adoptedPets = instantiateLists queue
//

const app = express();
app.use(cors());
app.use(express());

// Catch-all 500
app.use((error, req, res, next) => {
  let response
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    response = { error }
  }
  res.status(500).json(response)
})

//testing to see if this is connected
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api/dog', dogExpress);
app.use('/api/cat', catExpress);
app.use('/api/people', peopleExpress);

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('Serving on 8080');
});

module.exports = app;
