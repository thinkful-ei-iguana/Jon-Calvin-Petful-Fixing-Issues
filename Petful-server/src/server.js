const express = require('express');
const cors = require('cors');
const dogExpress = require('./Route/Dog-Routes');
const catExpress = require('./Route/Cat-Routes');
// const peopleExpress = require('./Route/Cat-Routes');

const app = express();
app.use(cors());
app.use(express());

// Catch-all 404
app.use(function(error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: app.get('env') === 'development' ? error : {}
  })
});

//testing to see if this is connected
app.get('/', (req,res) => {
  res.send('hi there!');
});

// app.get('/api/dog', (req,res) => {
//   res.send('hi dog!');
// });

app.use('/api/dog', dogExpress);
app.use('/api/cat', catExpress);
// app.use('/api/people', peopleExpress);


app.listen(8080, () => {
  console.log('Serving on 8080');
});

module.exports = app;