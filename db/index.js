const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'carousel'
})
connection.connect();

module.exports = connection;