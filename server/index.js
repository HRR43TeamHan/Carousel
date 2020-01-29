const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/index.js');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:id', (req, res) => {
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




app.listen(process.env.PORT || 3000, console.log('Listening on port 3000'))