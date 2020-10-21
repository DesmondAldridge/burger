//Global Variables
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burger_controller.js");

const PORT = process.env.PORT || 8080;
const app = express();

//Express
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
app.use(routes);

//Server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});