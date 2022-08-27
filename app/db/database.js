const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users",
  password: "12345678",
});

console.log(connection);

module.exports = connection;
