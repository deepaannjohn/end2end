// get the client
const mysql = require('mysql2');

function insertData() {
    // create the connection to database
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'joseph',
    password : '123456',
    database : 'e2e'
});
 
// simple query
connection.query('INSERT INTO app2 VALUES (123456)', function (error, results, fields) {
    if (error) throw error;
    console.log('inserted data into the table app2 successfully');
  });

  connection.end();

}
 

  module.exports = insertData;