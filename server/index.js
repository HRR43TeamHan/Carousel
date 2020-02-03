const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/index.js');

app.use('/:id', express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/carousel/:id', (req, res) => {
  db.getPhotos(req.params.id)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.sendStatus(400).send({
      message:err.message
    })
  })
})




app.listen(process.env.PORT || 3001, console.log('Listening on port 3001'))