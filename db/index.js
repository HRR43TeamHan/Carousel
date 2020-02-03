const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'carousel'
})
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as as ' + connection.threadId)
});

const getPhotos = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM media WHERE room_name=?', [id], (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
module.exports = {
  connection: connection,
  getPhotos: getPhotos
}
