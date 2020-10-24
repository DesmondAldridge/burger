//Dependency / Import Connection
const connection = require("./connection.js");

function printQuestionMarks(num) {
 let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
 return arr.toString();
}

function objToSql(ob) {
 let arr = [];
    for (let key in ob) {
     let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
     if (typeof value === "string" && value.indexOf(" ") >= 0) {
     value = "'" + value + "'";
     }
     arr.push(key + "=" + value);
    }
    }
 return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },