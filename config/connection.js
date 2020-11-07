//Dependency / Import
const mysql = require("mysql");
//Connection
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting to: " + err.stack);
        return;
    }
console.log("Connected as ID: " + connection.threadID);
});

//Exports
module.exports = connection;
