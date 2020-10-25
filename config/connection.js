//Dependency / Import
const mysql = require("mysql");

//Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting to: " + err.stack);
        return;
    }
console.log("Connected as ID: " + connection.threadID);
});

//Exports
module.exports = connection;
