// get the client
const mysql = require('mysql2')

function insertData() {
    // create the connection to database
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_DB)
const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
});
 
// simple query
connection.query('INSERT INTO app1 VALUES (123456)', function (error, results, fields) {
    if (error) throw error;
    console.log('inserted data into the table app1 successfully');
  });

  connection.end();

}
 

  module.exports = insertData;